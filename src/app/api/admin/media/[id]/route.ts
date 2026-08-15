import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

export async function DELETE(request: NextRequest, context: { params: Promise<{ id:string }> }) {
  const admin=await requireAdminRequest(request); if(!admin)return NextResponse.json({error:"Unauthorized"},{status:401});
  try{
    const {id}=await context.params;
    const rows=await supabaseRest<Array<{id:string;metadata:Record<string,unknown>}>>("admin_entries",{query:`select=id,metadata&id=eq.${encodeURIComponent(id)}&section=eq.media&limit=1`});
    const entry=rows[0]; if(!entry)return NextResponse.json({error:"Not found"},{status:404});
    const storagePath=String(entry.metadata?.storage_path||"");
    if(storagePath){
      const url=process.env.SUPABASE_URL; const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
      if(!url||!key)throw new Error("Supabase storage is not configured.");
      const r=await fetch(`${url.replace(/\/$/,"")}/storage/v1/object/lidya-media`,{method:"DELETE",headers:{apikey:key,Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({prefixes:[storagePath]}),cache:"no-store"});
      if(!r.ok)throw new Error((await r.text())||"Storage delete failed.");
    }
    await supabaseRest<void>("admin_entries",{method:"DELETE",query:`id=eq.${encodeURIComponent(id)}&section=eq.media`});
    return NextResponse.json({success:true});
  }catch(error){return NextResponse.json({error:error instanceof Error?error.message:"Delete failed."},{status:500});}
}

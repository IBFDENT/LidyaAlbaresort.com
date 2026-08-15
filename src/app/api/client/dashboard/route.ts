import { NextRequest, NextResponse } from "next/server";
import { requireClientRequest } from "@/lib/client-user";
import { supabaseRest } from "@/lib/supabaseAdmin";

type Enquiry = {
  id: string;
  type: "general" | "service" | "appointment";
  status: "new" | "in_progress" | "resolved" | "archived";
  subject: string | null;
  message: string | null;
  selected_services: string[];
  created_at: string;
};

type Favorite = {
  id: string;
  product_id: string;
  created_at: string;
  products: {
    id: string;
    name: string;
    category: string;
    collection: string | null;
    image_url: string | null;
    price: number | null;
    currency: string;
  } | null;
};

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const email = user.email.toLowerCase().replace(/[%_,()]/g, "");
    const [enquiries, favorites] = await Promise.all([
      supabaseRest<Enquiry[]>("enquiries", {
        query: `select=id,type,status,subject,message,selected_services,created_at&or=(user_id.eq.${user.id},email.ilike.${encodeURIComponent(email)})&order=created_at.desc`,
      }),
      supabaseRest<Favorite[]>("client_favorites", {
        query: `select=id,product_id,created_at,products(id,name,category,collection,image_url,price,currency)&user_id=eq.${user.id}&order=created_at.desc`,
      }),
    ]);

    return NextResponse.json({ user, enquiries, favorites });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to load client data." }, { status: 500 });
  }
}

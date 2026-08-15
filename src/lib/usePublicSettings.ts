"use client";

import { useEffect, useState } from "react";

type Entry={slug:string;body:string|null;metadata:Record<string,unknown>};

export function usePublicSettings(){
  const [settings,setSettings]=useState<Record<string,string>>({});
  useEffect(()=>{fetch("/api/public/cms/settings",{cache:"no-store"}).then(async r=>r.ok?r.json():null).then(payload=>{const next:Record<string,string>={};for(const e of (payload?.entries||[]) as Entry[]){const key=String(e.metadata?.meta1||e.slug||"").trim();const value=String(e.metadata?.meta2||e.body||"").trim();if(key&&value)next[key]=value;}setSettings(next);}).catch(()=>undefined);},[]);
  return settings;
}

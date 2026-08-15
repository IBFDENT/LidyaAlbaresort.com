import { NextRequest, NextResponse } from "next/server";
import { requireClientRequest } from "@/lib/client-user";
import { supabaseRest } from "@/lib/supabaseAdmin";

export async function POST(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = (await request.json()) as { productId?: string };
    const productId = body.productId?.trim();
    if (!productId) return NextResponse.json({ error: "Missing productId" }, { status: 400 });

    const products = await supabaseRest<Array<{ id: string }>>("products", {
      query: `select=id&id=eq.${encodeURIComponent(productId)}&status=eq.published&limit=1`,
    });
    if (!products[0]) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    try {
      await supabaseRest("client_favorites", {
        method: "POST",
        body: { user_id: user.id, product_id: productId },
        prefer: "return=minimal",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      if (!message.includes("client_favorites_user_id_product_id_key")) throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to save favorite." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const productId = request.nextUrl.searchParams.get("productId")?.trim();
    if (!productId) return NextResponse.json({ error: "Missing productId" }, { status: 400 });

    await supabaseRest("client_favorites", {
      method: "DELETE",
      query: `user_id=eq.${user.id}&product_id=eq.${encodeURIComponent(productId)}`,
      prefer: "return=minimal",
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to remove favorite." }, { status: 500 });
  }
}

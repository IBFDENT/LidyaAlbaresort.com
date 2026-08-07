import { redirect } from "next/navigation";

// "Investment Diamonds" was merged into the main Diamonds collection —
// this route is kept only so old links / bookmarks don't break.
export default function InvestmentDiamondsRedirect() {
  redirect("/diamonds");
}

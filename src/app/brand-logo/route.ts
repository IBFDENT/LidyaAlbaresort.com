import logo from "../../../lidya-logo.png";

export function GET(request: Request) {
  return Response.redirect(new URL(logo.src, request.url), 307);
}

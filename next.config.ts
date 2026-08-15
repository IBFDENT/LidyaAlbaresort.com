import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Nezverejňovať browser source maps v produkcii.
  productionBrowserSourceMaps: false,

  // Skryje HTTP hlavičku "X-Powered-By: Next.js".
  poweredByHeader: false,

  // Preferované moderné formáty pre optimalizované obrázky.
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      { source: "/account", destination: "/client", permanent: true },
      { source: "/account/login", destination: "/client/login", permanent: true },
      { source: "/account/register", destination: "/client/register", permanent: true },
      { source: "/account/dashboard", destination: "/client", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

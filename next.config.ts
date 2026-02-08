import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Netlify (outputs to /out)
  output: "export",

  images: {
    // Next/Image optimization requires a server; disable for static hosting
    unoptimized: true,
  },
};

export default nextConfig;

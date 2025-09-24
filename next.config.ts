import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optimized for Netlify deployment
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;

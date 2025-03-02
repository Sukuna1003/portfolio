import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // This is crucial for static export
  distDir:"out",
  images: {
    unoptimized: true,  // GitHub Pages doesn’t support Next.js optimized images
  },
  basePath: "/portfolio",  // This must match your repository name
  assetPrefix: "/portfolio", // Same here
};

export default nextConfig;

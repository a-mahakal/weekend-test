import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/weekend-test', // Set the base path for GitHub Pages
  assetPrefix: '/weekend-test/', // Prefix for assets
};

export default nextConfig;

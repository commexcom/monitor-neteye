import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    author: process.env.AUTHOR || "Unknown",
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    saudacao: process.env.SAUDACAO || "Oi",
  },
};

export default nextConfig;

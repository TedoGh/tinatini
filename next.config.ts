import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["dvqlxo2m2q99q.cloudfront.net"],
  },
};

export default nextConfig;

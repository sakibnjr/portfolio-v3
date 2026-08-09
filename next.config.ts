import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    qualities: [70, 80, 90, 100],
     remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 80, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "artqoyclfcmyuexipsca.supabase.co",
      },
    ],
  },
};

export default nextConfig;

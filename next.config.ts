import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dozvoli placeholder slike za development
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;

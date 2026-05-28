import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/doctor/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/doctor/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/delete-account",
        destination: "/doctor/delete-account",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

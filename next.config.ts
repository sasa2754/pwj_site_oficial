import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home"
      },
      {
        source: "/viewOrders",
        destination: "/viewOrders",
      },
      {
        source: "/webcam",
        destination: "/webcam"
      }
    ]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.output.publicPath = undefined; // Prevent dynamic publicPath during SSR
    }
    return config;
  },
};

export default nextConfig;

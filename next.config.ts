import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["172.22.144.1"],
};

export default nextConfig;

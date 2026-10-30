import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const defaultRepo = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "/portfolio";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions ? defaultRepo : "");
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: "export" as const } : {}),
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

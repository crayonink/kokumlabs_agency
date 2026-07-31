import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // There is an unrelated lockfile higher up in the user's home directory;
  // pin the workspace root to this project so Turbopack does not guess.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

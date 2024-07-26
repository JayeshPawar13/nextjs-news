/** @type {import('next').NextConfig} */

import path from "path";
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "*": [path.join(process.cwd(), "data.db")],
    },
  },
};

export default nextConfig;

import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Static export: `next build` writes the site to ./out (Next's default for
  // output: 'export'), using .next for its intermediate files.
  output: "export",
  images: {
    unoptimized: true,
  },
  // `next dev` gets its own folder so running `next build` while the dev
  // server is up can't overwrite the files dev is serving from.
  ...(phase === PHASE_DEVELOPMENT_SERVER && { distDir: ".next-dev" }),
});

export default nextConfig;

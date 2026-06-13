import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Pin the workspace root so the parent repo's lockfile isn't picked up.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default withMDX(config);

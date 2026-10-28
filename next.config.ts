import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Next 16 caches optimized images for 4h by URL, so replaced files in public/ stay stale in dev
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;

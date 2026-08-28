import type { NextConfig } from 'next';

const isIonosStaticExport = process.env.IONOS_STATIC_EXPORT === '1';

const nextConfig: NextConfig = {
  output: isIonosStaticExport ? 'export' : undefined,
};

export default nextConfig;

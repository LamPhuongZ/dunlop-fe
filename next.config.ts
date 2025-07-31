import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const baseConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dunlopvn.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

// Chỉ áp dụng PWA trong production
let finalConfig = withNextIntl(baseConfig);

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});
finalConfig = withPWA(finalConfig);

export default finalConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'nestjs',
        port: '3000',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;

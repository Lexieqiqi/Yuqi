/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lexieqiqi.github.io',
          pathname: '/Yuqi'
        },
      ],
  },
  assetPrefix: isProd ? "/Yuqi" : "",
  basePath: isProd ? "/Yuqi" : "",
}

module.exports = nextConfig

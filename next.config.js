/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  assetPrefix: isProd ? "Yuqi" : "",
  images: {
    unoptimized: true
  },
  basePath: isProd ? "Yuqi" : "",
}

module.exports = nextConfig

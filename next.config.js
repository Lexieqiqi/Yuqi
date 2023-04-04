/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true
  },
  basePath: ''
}

module.exports = nextConfig

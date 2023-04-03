/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  assetPrefix: isProd ? 'Yuqi' : '',
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

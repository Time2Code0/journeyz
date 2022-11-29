/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer(nextConfig);
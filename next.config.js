/** @type {import('next').NextConfig} */
const cl = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = cl.withContentlayer(nextConfig);
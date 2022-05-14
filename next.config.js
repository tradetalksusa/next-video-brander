/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
}

if (process.env.NODE_ENV === 'production') {
  Object.assign(nextConfig, {
    basePath: '/next-video-brander',
    assetPrefix: '/next-video-brander'
  })
}

module.exports = nextConfig

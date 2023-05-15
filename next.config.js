/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'bookworm-light-nextjs.vercel.app',
      'dummyimage.com',
      '64.media.tumblr.com',
      'media.graphassets.com',
      'media.graphcms.com'
    ],
  },
}

module.exports = nextConfig

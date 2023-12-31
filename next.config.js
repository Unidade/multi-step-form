/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/your-info",
        permanent: true,
      },
    ]
  },

  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

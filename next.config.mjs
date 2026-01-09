/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/demo',
        destination: 'https://upstream-demo.vercel.app', // TODO: Update this to your actual upstream deployment URL
      },
      {
        source: '/demo/:path*',
        destination: 'https://upstream-demo.vercel.app/:path*', // TODO: Update this to your actual upstream deployment URL
      },
    ]
  },
}

export default nextConfig

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
        destination: 'https://chomp-demo.vercel.app/demo'
      },
      {
        source: '/demo/:path*',
        destination: 'https://chomp-demo.vercel.app/demo/:path*'
      },
      {
        source: '/backend',
        destination: 'https://backend-visual.vercel.app/'
      },
      {
        source: '/backend/:path*',
        destination: 'https://backend-visual.vercel.app/:path*'
      },
      {
        source: '/assets/:path*',
        destination: 'https://backend-visual.vercel.app/assets/:path*'
      }
    ]
  },
}

export default nextConfig

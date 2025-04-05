import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/explain-code/:path*',
        destination: 'http://127.0.0.1:8000/api/explain-code/:path*',
      },
    ]
  },
}

export default nextConfig

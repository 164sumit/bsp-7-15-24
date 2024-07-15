/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/grafana/:path*',
            destination: 'http://grafana:3000/:path*',
          },
        ];
      },
};

export default nextConfig;

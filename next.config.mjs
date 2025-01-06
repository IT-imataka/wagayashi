/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/portfolio",
        destination: "/portfolio/index.html",
      },
    ];
  },
};

export default nextConfig;

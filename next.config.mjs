/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: "out",
  base:"/DynamicPortfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

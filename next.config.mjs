/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: "out",
  base:"/DynamicPortfolio",
  assetPrefix: "/DynamicPortfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

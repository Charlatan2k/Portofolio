/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'; // Check if we're in production (i.e., deployed)

const nextConfig = {
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  basePath: isProd ? '/my-portofolio' : '',
  assetPrefix: isProd ? '/my-portofolio/' : '',

  output: 'export',
};

export default nextConfig;

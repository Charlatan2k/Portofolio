/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'; // Check if we're in production (i.e., deployed)

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },

  // Conditionally set basePath for production
  basePath: isProd ? '/my-portofolio' : '', // Only apply basePath in production
  assetPrefix: isProd ? '/my-portofolio/' : '', // Prefix assets in production only

  output: 'export', // Ensure static export for GitHub Pages
};

export default nextConfig;

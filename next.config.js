/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_BASE_API: process.env.NEXT_PUBLIC_BASE_API,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
  },
  
  compiler: {
    styledComponents: true
  },

  async redirects() {
    return [
      {
        source: '/tenders',
        destination: '/',
        permanent: true,
      }, 
    ];
  },
};

module.exports = nextConfig;

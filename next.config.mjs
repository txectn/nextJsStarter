/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/shop",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['@nodelib/fs.scandir'],
    
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        net: false,
        tls: false,
        dns: false
      };
    }
    return config;
  },
};

export default nextConfig;

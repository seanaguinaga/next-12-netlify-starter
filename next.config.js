const nextConfig = {
  minifySWC: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    reactRoot: true,
  },
};

module.exports = nextConfig;

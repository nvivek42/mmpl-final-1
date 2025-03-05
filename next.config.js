// filepath: /f:/are underdog/@Underdog_david/metalmach-mastery-master/metalmach-mastery-master/next.config.js
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
//   analyzerMode: 'static',
//   reportFilename: './analyze/bundle-analysis.html'
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  reactStrictMode: true,
  
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  compress: true,

  // Remove experimental section as it's not supported in Next.js 14
  
  webpack: (config, { isServer }) => {
    // Server-side optimization
    if (isServer) {
      config.optimization.minimize = true;
    }
    
    // Client-side optimizations
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'all',
              enforce: true,
              priority: 10,
            },
            commons: {
              name: 'commons',
              chunks: 'initial',
              minChunks: 2,
              priority: 1,
            },
          },
        },
        runtimeChunk: {
          name: 'runtime',
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
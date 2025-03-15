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
    formats: ['image/avif', 'image/webp']
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
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
  
//   // Optimize images
//   images: {
//     domains: ['localhost'],
//     // Remove unoptimized for full image optimization
//     minimumCacheTTL: 31536000, // 1 year cache
//   },
  
//   // Enable compression
//   compress: true,
  
//   // Add swcMinify for better JS minification
//   swcMinify: true,

//   // Add explicit headers for comprehensive caching
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           // Enable GZIP and Brotli compression
//           {
//             key: 'Content-Encoding',
//             value: 'gzip, br'
//           },
//           // Cache-Control for all assets
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable'
//           }
//         ],
//       },
//       {
//         // Specific caching for static files
//         source: '/_next/static/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable'
//           }
//         ]
//       },
//       {
//         // HTML pages caching
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=3600, must-revalidate'
//           }
//         ]
//       }
//     ];
//   },

//   // Webpack optimizations
//   webpack: (config, { isServer }) => {
//     // Enable production mode optimizations
//     config.mode = 'production';
    
//     if (!isServer) {
//       config.optimization = {
//         ...config.optimization,
//         minimize: true,
//         moduleIds: 'deterministic',
//         splitChunks: {
//           chunks: 'all',
//           minSize: 10000,
//           maxSize: 244000,
//           cacheGroups: {
//             vendors: {
//               name: 'vendors',
//               test: /[\\/]node_modules[\\/]/,
//               chunks: 'all',
//               priority: 20,
//             },
//             commons: {
//               name: 'commons',
//               minChunks: 2,
//               chunks: 'all',
//               priority: 1,
//               reuseExistingChunk: true,
//             },
//           },
//         },
//         runtimeChunk: {
//           name: 'runtime',
//         },
//       };
//     }
    
//     return config;
//   },
// };

module.exports = nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
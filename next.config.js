// filepath: /f:/are underdog/@Underdog_david/metalmach-mastery-master/metalmach-mastery-master/next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  analyzerMode: 'static',
  reportFilename: './analyze/bundle-analysis.html'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
};

module.exports = withBundleAnalyzer(nextConfig);
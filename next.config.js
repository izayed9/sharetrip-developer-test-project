module.exports = {
  images: {
    // TODO: Change the domains when BE upload is implemented
    domains: ['generousjersey.weebly.com'],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  trailingSlash: true,
  staticPageGenerationTimeout: 200,
  typescript: {
    ignoreBuildErrors: false,
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

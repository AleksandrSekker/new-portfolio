/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add rule for handling SVG files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;

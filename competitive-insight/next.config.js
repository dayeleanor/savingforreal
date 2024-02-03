const svgoConfig = require("./svgo.config");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["images.ctfassets.net", "localhost", "api.ecologi.com"],
    },
    pageExtensions: ["ts", "tsx", "js", "jsx"]
      .map((extension) => {
        const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
        const prodExtension = `(?<!dev\.)${extension}`;
        const devExtension = `dev\.${extension}`;
        return isDevServer ? [devExtension, extension] : prodExtension;
      })
      .flat(),
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: svgoConfig,
            },
          },
        ],
      });

      return config;
    },
  };

  return nextConfig;
};

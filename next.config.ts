import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  //configuração definida para importar arquivos em svg
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack', //biblioteca instalada
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;

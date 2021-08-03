const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
    new WebpackPwaManifest({
      prefer_related_applications: false,
      short_name: "React App",
      name: "Create React App Sample",
      description: "Prices for all parts made of all available panel types",
      lang: "en-US",
      start_url: "/",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#ffffff",
      icons: [
        {
          src: "./public/favicon.ico",
          sizes: "64x64 32x32 24x24 16x16",
          type: "image/x-icon",
        },
        {
          src: "./public/logo192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src: "./public/logo512.png",
          type: "image/png",
          sizes: "512x512",
        },
      ],
    }),
  ],
};

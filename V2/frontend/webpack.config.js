const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Fichier d'entrée principal
  output: {
    path: path.resolve(__dirname, "dist"), // Dossier de sortie des fichiers compilés
    filename: "bundle.js", // Nom du fichier final généré
    clean: true // Supprime les anciens fichiers dans 'dist' avant chaque build
  },
  mode: "development", // Peut être 'development' ou 'production'
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Transpilation JS, JSX, TS, TSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Utilise Babel pour compiler
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/, // Ajout du support de Sass
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // Permet d'importer des fichiers sans spécifier leur extension
    alias: {
      "@usecases": path.resolve(__dirname, "src/usecases/"), // Alias pour les imports
      "@controllers": path.resolve(__dirname, "src/controllers/"),
      "@services": path.resolve(__dirname, "src/services/"),
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Dossier à servir
    compress: true,
    port: 3000, // Port du serveur de développement
    hot: true, // Hot Module Replacement pour recharger sans recompiler entièrement
    historyApiFallback: true, // Permet le bon fonctionnement du routing React (évite les erreurs 404)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Utilise un template HTML
      filename: "index.html",
    }),
  ],
};
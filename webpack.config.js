require("webpack");
const path = require("path"); // Module Node utilisable avec Webpack, sert a résoudre les chemins relatifs
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizePlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // Point d'entrée JS, fichier qui contiendra vos includes
    entry: {
      // Clé = name (voir 'output') valeur = chemin vers le fichier
      front: "./assets/front.js",
      admin: "./assets/admin.js"
    },
    // Objet contenant le chemin de sortie, ainsi que le nom à donner au fichier
    output: {
        path: path.resolve(__dirname, "public/build"),
        filename: "js/[name].js",
        publicPath: "/"
    },

    module: {
        rules: [
            // Rècles fichiers CSS.
            {
                test: /\.css$/i,
                use: [
                    {
                        // style-loader injecte le css dans le <head>
                        // MiniCssExtractPlugin injecte le css dans un fichier css portant le même nom par défaut
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader : "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                            publicPath: "build/images/"
                        }
                    }
                ]
            }
        ]
    },

    optimization: {
        minimizer: [
            new CssMinimizePlugin()
        ]
    },

    plugins: [].concat([
        new MiniCssExtractPlugin({filename: "css/[name].css"}),
        new CopyPlugin({
            patterns: [
                {from: "assets/css/images", to: "images/"}
            ]
        }),
    ]),
};
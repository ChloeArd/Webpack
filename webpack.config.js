const webpack = require("webpack");
const path = require("path"); // Module Node utilisable avec Webpack, sert a résoudre les chemins relatifs

module.exports = {
    // Point d'entrée JS, fichier qui contiendra vos includes
    entry: {
      // Clé = name (voir 'output') valeur = chemin vers le fichier
      front: "./assets/front.js",
      admin: "./assets/admin.js"
    },
    // Objet contenant le chemin de sortie, ainsi que le nom à donner au fichier
    output: {
        path: path.resolve(__dirname, "public/build/js"),
        filename: "[name].js"
    }
};
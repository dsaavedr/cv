const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        }
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /.js$/i,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader"
            }
        ]
    },
    mode: process.env.ENV || "production"
};

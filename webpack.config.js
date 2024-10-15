const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js', // Entry point (your main JavaScript file)
    output: {
        path: path.resolve(__dirname, 'dist'), // Output folder (dist)
        filename: 'bundle.js', // Bundled file name
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Rule for CSS files
                use: ['style-loader', 'css-loader'], // Loaders to inject CSS into the bundle
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Rule for images
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Keep original file name and extension
                            outputPath: 'images/', // Output path for images
                        },
                    },
                ],
            },
            {
                test: /\.js$/, // Target JavaScript files
                exclude: /node_modules/, // Ignore node_modules
                use: {
                    loader: 'babel-loader', // Transpile ES6+ JavaScript to ES5
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template HTML file
            filename: 'index.html', // Output HTML file
        }),
    ],
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Serve from dist folder
        compress: true,
        port: 9000, // Local development server port
    },
    mode: 'development', // Mode can be 'development' or 'production'
};

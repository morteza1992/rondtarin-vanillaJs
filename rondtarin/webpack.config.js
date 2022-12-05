module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
//...
            {
                test: /\.css$/,
                use: ['lit-css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                                function (root, result) {
                                    return require('@fullhuman/postcss-purgecss')({
                                        content: [root.source.input.file.replace('.css', '.ts')],
                                        safelist: [':host'],
                                        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                                    })(root, result);
                                }
                            ],
                        },
                    }
                }]
            }
//...
        ]
    },
};
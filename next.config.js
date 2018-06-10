module.exports = {
    webpack: config => {
        // handle images
        config.module.rules.push({
            test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
            use: [
                {
                    loader: 'file-loader'
                },
            ],
        });

        return config;
    },
};
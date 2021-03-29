
module.exports = {
    env: {
        test: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: "commonjs",
                        debug: false,
                    },
                ],
                "@babel/preset-flow",
                "@babel/preset-react",
            ],
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-syntax-jsx",
            ],
        },
        production: {
            presets: [["@babel/preset-env", { modules: false }], "@babel/preset-flow", "@babel/preset-react"],
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-syntax-jsx",
            ],
        },
        development: {
            presets: [["@babel/preset-env", { modules: false }], "@babel/preset-flow", "@babel/preset-react"],
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-syntax-jsx",
            ],
        },
    },
};

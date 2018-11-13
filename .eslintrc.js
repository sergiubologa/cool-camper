module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "always"]
    },
    extends: ["prettier"]
};

module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-mixins"),
        require("postcss-nested"),
        require("postcss-hexrgba"),
        require("postcss-simple-vars"),
        require("autoprefixer"),
        require("postcss-preset-env"),
    ],
};
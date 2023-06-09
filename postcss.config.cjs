module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-preset-env'),
        require('autoprefixer')({overrideBrowserslist: ["last 2 version"]}),
        require('cssnano')
    ]
}
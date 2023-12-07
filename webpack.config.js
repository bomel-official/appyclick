const path = require('path')

module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'main.min.js',
        path: path.resolve(__dirname, 'dist', 'js'),
        clean: true
    }
}
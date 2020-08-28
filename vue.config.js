// config file for Vue

const path = require('path');

module.exports = {
    // set the correct entry and template files
    pages: {
        index: {
            entry: 'front/src/main.js',
            template: 'front/public/index.html'
        }
    },
    // allows Alias to work again
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'front/src')
            }
        }
    }
}

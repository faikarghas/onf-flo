
const webpack = require('webpack')

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    }
}
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')


module.exports = withPlugins([
	withCSS,
	withSass,
    withImages,
])
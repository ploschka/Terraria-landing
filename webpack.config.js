const Encore = require('@symfony/webpack-encore')
const path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured())
{
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build/')
    .addEntry('index', './app/app.jsx')
    .addAliases({
        Styles: path.join(__dirname, './app/styles'),
        Components: path.join(__dirname, './app/components'),
    })

    .enableReactPreset()
    .enableSassLoader()
    
    .cleanupOutputBeforeBuild()
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .enableSingleRuntimeChunk()
;

module.exports = Encore.getWebpackConfig();

module.exports = {
    filenameHashing: false,
    indexPath: "../index.html",
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    pwa: {
        iconPaths: {
            favicon32: 'xu.jpeg',
            favicon16: 'xu.jpeg',
            appleTouchIcon: 'xu.jpeg',
            maskIcon: 'xu.jpeg',
            msTileImage:'xu.jpeg'
        }
    },
    pluginOptions: {
        foo: {
            // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
        }
    }
};

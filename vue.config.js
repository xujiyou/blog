module.exports = {
    filenameHashing: false,
    indexPath: "../index.html",
    publicPath: process.env.NODE_ENV === 'production'
        ? './dist'
        : '/',
    pwa: {
        iconPaths: {
            favicon32: 'xu.jpeg',
            favicon16: 'xu.jpeg',
            appleTouchIcon: 'xu.jpeg',
            maskIcon: 'xu.jpeg',
            msTileImage:'xu.jpeg'
        }
    }
};

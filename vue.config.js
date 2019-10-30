module.exports = {
    filenameHashing: false,
    indexPath: "../index.html",
    publicPath: process.env.NODE_ENV === 'production'
        ? './dist'
        : '/'
};

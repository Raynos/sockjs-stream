var protocolLess = /^\/\/[^\/]+\//
    , hasProtocol = /^https?:\/\//
    , hasSlash = /^\//

module.exports = normalizeUri

function normalizeUri(uri) {
    if (protocolLess.test(uri)) {
        uri = window.location.protocol + uri;
    }
    else if (!hasProtocol.test(uri)) {
        uri = window.location.protocol + '//' +
            window.location.host +
            (hasSlash.test(uri) ? uri : '/' + uri)
    }

    return uri
}

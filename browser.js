var DataChannel = require('data-channel')
    , sockjs = require('sockjs-client')

    , normalizeUri = require("./uri")

module.exports = Stream

function Stream(uri, options) {
    var sock = sockjs(normalizeUri(uri || "/sock")
        , null, options || {})

    return DataChannel(sock)
}

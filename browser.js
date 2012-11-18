var DataChannel = require('data-channel')
    , sockjs = require('sockjs-client')

    , normalizeUri = require("./uri")

module.exports = Stream

function Stream(uri) {
    return DataChannel(sockjs(normalizeUri(uri || "/sock")))
}

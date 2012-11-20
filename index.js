/*global WebSocket:true*/
var DataChannel = require("data-channel")
    , WebSocket = require("ws")

    , protocolLess = /^\/\/[^\/]+\//
    , hasProtocol = /^wss?:\/\//

module.exports = Stream

function Stream(uri) {
    if (protocolLess.test(uri)) {
        uri = "ws:" + uri
    } else if (!hasProtocol.test(uri)) {
        uri = "ws://" + uri
    }

    var ws = new WebSocket(uri + "/websocket")

    return DataChannel(ws)
}

/*global WebSocket:true*/
var DataChannel = require("data-channel")
    , WebSocket = require("ws")

    , hasProtocol = /^wss?:\/\//

module.exports = Stream

function Stream(uri) {
    if (!hasProtocol.test(uri)) {
        uri = "ws://" + uri
    }

    var ws = new WebSocket(uri + "/websocket")

    return DataChannel(ws)
}

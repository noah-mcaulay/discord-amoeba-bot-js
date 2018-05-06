'use strict';

function sendPong(message) {
    message.channel.send("pong");
}

module.exports.sendPong = sendPong;
'use strict';

const audioManager = require('../utility/audioManager');

const thotAudio = "../data/begone-thot.mp3";
const audioOptions = { volume: 0.3 };

function playAudio(message) {
    audioManager.playAudio(message, thotAudio, audioOptions);
}

module.exports.playAudio = playAudio;
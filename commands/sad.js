'use strict';

const audioManager = require('../utility/audioManager');

const sadAudio = "../data/gary-jules-mad-world.mp3";
const audioOptions = { volume: 0.3 };

function playAudio(message) {
    audioManager.playAudio(message, sadAudio, audioOptions);
}

module.exports.playAudio = playAudio;
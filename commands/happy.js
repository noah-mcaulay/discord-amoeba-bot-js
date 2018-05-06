'use strict';

const audioManager = require('../utility/audioManager');

const happyAudio = "../data/bob-marley-everythings-gonna-be_alright.mp3";
const audioOptions = { volume: 0.3 };

function playAudio(message) {
    audioManager.playAudio(message, happyAudio, audioOptions);
}

module.exports.playAudio = playAudio;
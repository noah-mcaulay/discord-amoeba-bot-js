'use strict';

const tokenFile = require("./token.js");

const discord = require('discord.js');

const client = new discord.Client();

const maps = require('./commands/maps');
const ping = require('./commands/ping');
const happy = require('./commands/happy');
const sad = require('./commands/sad');
const thot = require('./commands/thot');

const audioCommands = new Set([
    "!happy",
    "!sad",
    "!thot",
]);

const textCommands = new Set([
    "!ping",
    "!maps",
]);

client.on("ready", () => {
   console.log("I'm ready!");
});

client.on("message", message => {
    if (audioCommands.has(message.content) && message.member.voiceChannel) {
        handleAudioCommand(message);
    } else if (textCommands.has(message.content)) {
        handleTextCommand(message);
    }
});

function handleAudioCommand(message) {
    switch (message.content) {
        case "!happy":
            happy.playAudio(message);
            break;
        case "!sad":
            sad.playAudio(message);
            break;
        case "!thot":
            thot.playAudio(message);
            break;
        default:
            console.log("How did this even happen...?");
    }
}

function handleTextCommand(message) {
    switch(message.content) {
        case "!ping":
            ping.sendPong(message);
            break;
        case "!maps":
            maps.sendMapsLink(message);
            break;
        default:
            console.log("How did this even happen...?");
    }
}

client.login(tokenFile.token);
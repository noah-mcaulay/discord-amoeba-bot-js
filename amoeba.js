const tokenFile = require("./token.js");

const fs = require("fs");
const moment = require("moment");
const discord = require('discord.js');

const client = new discord.Client();

// store the filename of the audio file for sampling later
const happyAudio = "./data/bob-marley-everythings-gonna-be_alright.mp3";

const sadAudio = "./data/gary-jules-mad-world.mp3";

const thotAudio = "./data/begone-thot.mp3";

// audio stream options (volume)
const audioOptions = { volume: 0.3 };

client.on("ready", () => {
   console.log("I'm ready!");
});

client.on("message", message => {

   // make sure the user is in a voice channel
   if (message.member.voiceChannel) {

       // if the sent message was "ping" then respond with "pong"
       if (message.content === "ping") {
           message.channel.send("pong");
       } else if (message.content === "!happy") {
           // join the user's voice channel
           message.member.voiceChannel.join()
               .then(connection => {

                   // play the audio file
                   const dispatcher = connection.playFile(happyAudio, audioOptions);

                   // disconnect from the voice channel when the audio is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
               })
               .catch(console.log);
       } else if (message.content === "!sad") {
           // join the user's voice channel
           message.member.voiceChannel.join()
               .then(connection => {

                   // play the audio file
                   const dispatcher = connection.playFile(sadAudio, audioOptions);

                   // disconnect from the voice channel when the audio is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                   });
               })
               .catch(console.log);
       } else if (message.content === "!thot") {
           // join the user's voice channel
           message.member.voiceChannel.join()
               .then(connection => {

                   // play the audio file
                   const dispatcher = connection.playFile(thotAudio, audioOptions);

                   // disconnect from the voice channel when the audio is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                   });
               })
               .catch(console.log);
       }
   }
});

client.login(tokenFile.token);
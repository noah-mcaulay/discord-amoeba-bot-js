'use strict';

function playAudio(message, audioPath, audioOptions) {
    message.member.voiceChannel.join()
        .then(connection => {

            console.log("Joined the channel!");

            // play the audio file
            const dispatcher = connection.playFile(audioPath, audioOptions);

            console.log("Started playing audio: " + audioPath);

            // disconnect from the voice channel when the audio is over
            dispatcher.on("end", () => {
                console.log("Audio is over.");
                message.member.voiceChannel.leave();
            });

            dispatcher.on("error", (error) => {
               console.log("Error playing audio: " + error);
            });
        })
        .catch(console.log);
}

module.exports.playAudio = playAudio;
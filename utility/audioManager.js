'use strict';

function playAudio(message, audioPath, audioOptions) {
    message.member.voiceChannel.join()
        .then(connection => {

            // play the audio file
            const dispatcher = connection.playFile(audioPath, audioOptions);

            // disconnect from the voice channel when the audio is over
            dispatcher.on("end", () => {
                message.member.voiceChannel.leave();
            });
        })
        .catch(console.log);
}

module.exports.playAudio = playAudio;
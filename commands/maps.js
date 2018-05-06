'use strict';

const googleMapsLink = "https://www.google.com/maps/place/Dominican+Republic/@19.4521618,-71.4155579,3a,71.9y,143.56h,83.09t/data=!3m8!1e1!3m6!1sAF1QipMYvDkL2N7KdkR4M9N6xl5s42fz5RbupI4EcC3Y!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMYvDkL2N7KdkR4M9N6xl5s42fz5RbupI4EcC3Y%3Dw203-h100-k-no-pi-0-ya137.44469-ro-0-fo100!7i8704!8i4352!4m13!1m7!3m6!1s0x8f10c200ceff22cd:0xc8faa7e53fac15b5!2sNicaragua!3b1!8m2!3d12.865416!4d-85.207229!3m4!1s0x8eaf8838def1b6f5:0xa6020f24060df7e0!8m2!3d18.8965422!4d-70.1998901";

function sendMapsLink(message) {
    message.channel.send(googleMapsLink);
}

module.exports.sendMapsLink = sendMapsLink;
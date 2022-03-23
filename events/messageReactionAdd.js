const simplydjs = require('simply-djs');
const client = require("../index");

// Simply - DJS --->> Starboard Command

client.on("messageReactionAdd", async (message) => {
    simplydjs.starboard(client, message, {
        event: "messageReactionAdd",
        chid: "855681042773704714",
        embedColor: "2F3136",
        min: 5,
        credit: false,
        embedFoot: "Starboard - Reubz Bot",
    });
})
const simplydjs = require('simply-djs');
const client = require("../index");
const { starboardChannel } = require('../config.json');


// Simply - DJS --->> Starboard Command

client.on("messageDelete", async (message) => {
    // if(reaction.guild.me.permissionsIn(reaction.message.channelId).has("MANAGE_MESSAGES"))

    simplydjs.starboard(client, message, {
        event: "messageDelete",
        chid: `${starboardChannel}`,
        embedColor: "2F3136",
        min: 5,
        credit: false,
        embedFoot: "Starboard - Reubz Bot",
    });
})
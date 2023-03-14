const simplydjs = require('simply-djs');
const client = require("../index");
const { starboardChannel } = require('../config.json');

// Simply - DJS --->> Starboard Command

client.on("messageReactionAdd", async (reaction) => {
    // if(reaction.guild.me.permissionsIn(reaction.message.channelId).has("MANAGE_MESSAGES"))
    
    simplydjs.starboard(client, reaction, {
        event: "messageReactionAdd",
        chid: `${starboardChannel}`,
        embedColor: "2F3136",
        min: 5,
        credit: false,
        embedFoot: "Starboard - Reubz Bot",
    }).catch((e) => {})
})
const config = require("../config.json");
const client = require("../index");
const { MessageEmbed, MessageActionRow, MessageAttachment, MessageButton } = require("discord.js");
const lvlroleDB = require('simply-xp/src/models/lvlrole');
const level = require("simply-xp/src/models/level");



client.on("levelUp", async (message, data) => {

    /**
     * Level Event returns
     * {
     *  xp, 
     *  level,
     *  userID,
     *  guildID
     * }
     */

    const levelUpChannel = message.guild.channels.cache.get(config.levelsChannel);

    let a = await lvlroleDB.find({ 
        gid: message.guild.id,
    })
    let output = a[0].lvlrole.find((item) => item.lvl === data.level.toString()) || undefined
    
    if(output === undefined) {
        return levelUpChannel.send({ content: `${message.author} Leveled Up!! Now you are now **${data.level}**`, allowedMentions: { parse: ["users"] } })
    }
    else {
        let role = message.guild.roles.cache.find((r) => r.id === output.role)
        return levelUpChannel.send({ content: `${message.member.user} Leveled Up!! Now you are **${data.level}**. You recieved ${role}`, allowedMentions: { parse: ["users"] }});
    }
})
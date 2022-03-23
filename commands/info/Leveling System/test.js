const { Client, Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');
const lvlroleDB = require('simply-xp/src/models/lvlrole')

module.exports = {
    name: 'test',
    description: 'Command Description',
    ownerOnly: true,
    toggleOff: true,
    botpermissions: ["SEND_MESSAGES"],

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        // console.log('this command works');
        // message.channel.send({ content: 'this command works' })
        //cc.rankCard(message, message.author.id, message.guild.id).then((rankImage) => { message.reply({ files: [rankImage] }) })
        let currentLevel = '3'

        let a = await lvlroleDB.find({ 
            gid: message.guild.id,
        })
        output = a[0].lvlrole.find((item) => item.lvl === currentLevel) || undefined

        if(output === undefined) {
            return message.channel.send({ content: `${message.author} Leveled Up!! Now you are now **${currentLevel}**`})
        }
        else {
            let role = message.guild.roles.cache.find((r) => r.id === output.role)
            return message.channel.send({ content: `${message.author} Leveled Up!! Now you are **${output.lvl}**. You recieved ${role}`, allowedMentions: { parse: ["users"] } });
        }
    }
};
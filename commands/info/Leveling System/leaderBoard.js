const { Client, Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');
const simplydjs = require("simply-djs")
const config = require('../../../config.json')

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    description: 'Leaderboard Command',
    ownerOnly: false,
    toggleOff: false,
    botpermissions: ["SEND_MESSAGES"],

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
      if(message.channel.id !== config.levelsChannel) return;
        await xp.leaderboard(client, message.guild.id, 45).then(board => {
            let a = []
            let b = []
						let c = []
         
            board.forEach(user => {
                if (user.position <= 10) {
                    a.push(`@ ${user.username}   • •   'Lvl: ${user.level}'\n--------------------------------------`)
                } else if (user.position > 10 && user.position <= 20) {
                    b.push(`@ ${user.username}   • •   'Lvl: ${user.level}'\n--------------------------------------`)
                } else if (user.position > 20 && user.position <= 30) {
                    c.push(`@ ${user.username}   • •   'Lvl: ${user.level}'\n--------------------------------------`)
                }
            })
         
            let emb = new MessageEmbed()
                .setTitle('Leaderboard')
                .setDescription(`***1 - 10 Users*** **leaderboard**\n\`\`\`py\n${a.toString().replaceAll(',', '\n')}\n\`\`\``)
                .setColor('#2f3136')
         
         
            let emb2 = new MessageEmbed()
                .setTitle('Leaderboard')
                .setDescription(`***10 - 20 Users*** **leaderboard**\n\`\`\`py\n${b.toString().replaceAll(',', '\n')}\n\`\`\``)
                .setColor('#2f3136')

            let emb3 = new MessageEmbed()
                .setTitle('Leaderboard')
                .setDescription(`***20 - 30 Users*** **leaderboard**\n\`\`\`py\n${c.toString().replaceAll(',', '\n')}\n\`\`\``)
                .setColor('#2f3136')
         
            let pg = [emb, emb2, emb3]
            simplydjs.embedPages(client, message, pg, { slash: false });
        })
    }
};
const { Client, Message, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment, MessageSelectMenu } = require('discord.js');
const simplydjs = require("simply-djs")
const config = require('../../../config.json')
const canvas = require('discord-canvas')

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
        await xp.leaderboard(client, message.guild.id, 45).then(async board => {
            let a = []
            let b = []
			let c = []
         
            board.forEach(user => {
                let u = message.guild.members.cache.find((x) => x.id === user.userID)
                if (user.position <= 11) {
                    a.push({
                        "icon": `${u.displayAvatarURL({ format: 'png' })}`,
                        "data": `${user.username}   • •   LVL: ${user.level}`
                    })
                } else if (user.position > 10 && user.position <= 20) {
                    b.push({
                        "icon": `${u.displayAvatarURL({ format: 'png' })}`,
                        "data": `${user.username}   • •   LVL: ${user.level}`
                    })
                } else if (user.position > 20 && user.position <= 30) {
                    c.push({
                        "icon": `${u.displayAvatarURL({ format: 'png' })}`,
                        "data": `${user.username}   • •   LVL: ${user.level}`
                    })
                }
            })

            console.log(a)

            const image = new canvas.Leaderboard()
                .setData(a)
                .setAvatars(true)
                .toAttachment()

            const attachment = new MessageAttachment((await image).toBuffer(), 'leaderboard-1.png');

         
            let emb = new MessageEmbed()
                .setTitle(`${message.guild.name}'s Leaderboard`)
                .setDescription(`Full Leaderboard top 100 users - *Coming Soon*`)
                .setColor('#2f3136')
                .setImage("attachment://leaderboard-1.png")
            
            message.reply({ embeds: [emb], files: [attachment], allowedMentions: { repliedUser: false } })
         
         
            // let emb2 = new MessageEmbed()
            //     .setTitle('Leaderboard')
            //     .setDescription(`***10 - 20 Users*** **leaderboard**\n\`\`\`py\n${b.toString().replaceAll(',', '\n')}\n\`\`\``)
            //     .setColor('#2f3136')

            // let emb3 = new MessageEmbed()
            //     .setTitle('Leaderboard')
            //     .setDescription(`***20 - 30 Users*** **leaderboard**\n\`\`\`py\n${c.toString().replaceAll(',', '\n')}\n\`\`\``)
            //     .setColor('#2f3136')
         
            // let pg = [emb, emb2, emb3]
            // simplydjs.embedPages(client, message, pg, { slash: false });
        })
    }
};
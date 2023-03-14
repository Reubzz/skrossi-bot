const xp = require('simply-xp');
const simplydjs = require('simply-djs')
const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageAttachment, MessageEmbed } = require('discord.js');
const canvas = require('discord-canvas')
const { webURL } = require('../../../config.json')


module.exports = {
    name: 'leaderboard',
    description: 'Shows the Leaderboard',

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await xp.leaderboard(client, interaction.guild.id, 45).then(async board => {
            let a = []
            let b = []
            let c = []

            board.forEach(user => {
                let u = interaction.guild.members.cache.find((x) => x.id === user.userID)
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

            const image = new canvas.Leaderboard()
                .setData(a)
                .setAvatars(true)
                .toAttachment()

            const attachment = new MessageAttachment((await image).toBuffer(), 'leaderboard-1.png');


            let emb = new MessageEmbed()
                .setTitle(`${interaction.guild.name}'s Leaderboard`)
                .setDescription(`Full Leaderboard top 100 users - *Coming Soon*`)
                .setColor('#2f3136')
                .setImage("attachment://leaderboard-1.png")

            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setLabel('Top 100 LB here!')
                    .setStyle('LINK')
                    .setURL(`${webURL}/leaderboards/skrossi`)
            )

            interaction.followUp({ embeds: [emb], files: [attachment], components: [row] })
        })
    }
};
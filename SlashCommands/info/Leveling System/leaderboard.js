const xp = require('simply-xp');
const simplydjs = require('simply-djs')
const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'leaderboard',
    description: 'Shows the Leaderboard',

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await xp.leaderboard(client, interaction.guild.id, 45).then(board => {
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
            simplydjs.embedPages(client, interaction, pg, { slash: true })
        })
    }
};
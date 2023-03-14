const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { webURL, supportServer } = require('../../../config.json')

module.exports = {
    name: 'help',
    description: 'displays a help embed',

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('Bot Commands')
                .setStyle('LINK')
                .setURL('https://bot.reubz.tk/commands')
        )

        const emb = new MessageEmbed()
            .setTitle("SkRossi Official Commands")
            .setDescription(`
                Prefix for this server is - \`!\`\n
                **__Useful Links__: **
                [Commands List](${webURL}/commands)
                [Support Server](${supportServer})
            `)
            .setFooter("For queries/issues regarding this bot contact @Reubz")
            .setColor("#2f3136")
        
        interaction.followUp({ embeds: [emb], components: [row] })
    }
};
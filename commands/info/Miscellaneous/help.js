const { Client, Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');
const { webURL, supportServer } = require('../../../config.json')

module.exports = {
    name: 'help',
    description: 'displays a help embed',
    ownerOnly: false,
    toggleOff: false,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('Bot Commands')
                .setStyle('LINK')
                .setURL(`https://${webURL}/commands`)
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
            .setColor('#2f3136')

        message.reply({ embeds: [emb], components: [row] })
    }
};
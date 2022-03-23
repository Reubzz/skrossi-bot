const { Client, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "twitter",
    aliases: ['Twitter'],
    ownerOnly: false,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setLabel('Twitter')
          .setEmoji('841257431421550602')
          .setURL('https://twitter.com/skrossigg'),
      )
        message.reply({ content: '👇 **SkRossi\'s Twitter** 👇', components: [row] })
    }  
};
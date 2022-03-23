const { Client, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "instagram",
    aliases: ['insta', 'ig'],
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
          .setLabel('Instagram')
          .setEmoji('841257539294986270')
          .setURL('https://www.instagram.com/skrossi_'),
      )
        message.reply({ content: '👇 **SkRossi\'s Insta** 👇', components: [row] })
    }  
};
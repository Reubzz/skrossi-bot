const { Client, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "facebook",
    aliases: ['Facebook', 'FB', 'fb'],
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
          .setLabel('Facebook')
          .setEmoji('860850821314379778')
          .setURL('https://www.facebook.com/skrossigg'),
      )
        message.reply({ content: '👇 **SkRossi\'s FB** 👇', components: [row] })
    }  
};
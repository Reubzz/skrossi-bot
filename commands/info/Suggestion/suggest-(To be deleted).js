const { Client, Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: 'suggest',
    description: 'Post your Suggestion in a Embed with buttons for others to vote.',
    ownerOnly: false,
    toggleOff: false,
    botpermissions: ["SEND_MESSAGES"],

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        message.reply({ content: "Chat Commands for this feature has been discontinued. \n\n**Kindly use `/suggest` for this command!!**" })
    }
};
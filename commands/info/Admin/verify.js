const { Client, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "verify",
    description: "This is a Verify Button Role Command!",
    ownerOnly: true,

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        
        const embed1 = {
            
            title: 'Server Verification',
            description: `Please read <#750016097495024051> & Click the Button below to access rest of the Server!!`,
            color: '#2F3136'
            }

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('Verify')
                .setLabel('Verify!')
                .setStyle('SUCCESS')
        )

        message.channel.send({ embeds: [embed1], components: [row] });
    },
};
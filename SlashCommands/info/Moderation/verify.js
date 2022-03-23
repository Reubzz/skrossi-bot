const { Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "verify",
    description: "This is a Verify Button Role Command!",
    userPermissions: ["MANAGE_ROLES"],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    run: async (client, interaction, args) => {
        
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

        interaction.followUp({ embeds: [embed1], components: [row] });
    },
};
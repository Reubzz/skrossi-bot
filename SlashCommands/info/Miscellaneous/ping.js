const { Client, CommandInteraction, MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    description: "See the bots ping",
    
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction 
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let pingEmoji 
        let date = Date.now()
        await interaction.editReply({content: `Pinging`});
        await interaction.editReply({content: `Pinging.`})
        await interaction.editReply({content: `Pinging..`})
        await interaction.editReply({content: `Pinging...`})
        await interaction.editReply({content: `Pinging..`})
        await interaction.editReply({content: `Pinging.`})

            if(client.ws.ping > 100 ) {
                pingEmoji = `🔴`
            }
            if(client.ws.ping <= 100 ) {
                pingEmoji = `🟡`
            }
            if(client.ws.ping <= 50) {
                pingEmoji = `🟢`
            }

            
        setTimeout(() => {
            interaction.editReply({ content: `${pingEmoji} • **${client.ws.ping}ms**` });
        }, 100)
        
    }
}


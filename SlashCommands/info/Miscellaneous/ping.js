const { Client, CommandInteraction, MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    description: "See the bots ping",

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction 
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.editReply({ content: `Pinging` });
        await interaction.editReply({ content: `Pinging.` });
        await interaction.editReply({ content: `Pinging..` });
        await interaction.editReply({ content: `Pinging...` });

        let ping = client.ws.ping;
        let pingEmoji = `🔴`;
        if (ping <= 100) pingEmoji = `🟡`;
        if (ping <= 50) pingEmoji = `🟢`;

        setTimeout(() => {
            interaction.editReply({ content: `${pingEmoji} • **${ping}ms**` });
        }, 100)

    }
}


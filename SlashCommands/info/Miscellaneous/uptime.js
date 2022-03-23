const { Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "uptime",
    description: "See Bot's uptime",
    
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let totalSeconds = client.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        interaction.followUp({content: `<a:online:891575878088269824> • ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds `})
    }
}
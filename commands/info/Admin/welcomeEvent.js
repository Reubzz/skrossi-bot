const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'we',
    ownerOnly: true,
    description: "this command emits the welcome (guild member add) event",

    run: async (client, message, args) => {
      client.emit("guildMemberAdd", message.member)
      message.channel.send({ content: `Welcome Message send to $<#750015958894248037>`})
    }
}
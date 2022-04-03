const client = require("../index");
const config = require("../config.json");
const { MessageEmbed, MessageActionRow, MessageAttachment, MessageButton } = require("discord.js");

client.on("messageCreate", async (message) => {
  if(message.channel.id !== '940833000168488980') return
  // if(message.author.id !== '940871443204427796') return
	let guilds = [
		{
			guildId: "749948917940092938", // Skrossi
			channelId: "750679324230680588", // Channel ID
			mentions: "<@&781859871183339550> :", // Poeple to be Pinged
		},
		{
			guildId: "798518088697774101", // Reubz Test Zone
			channelId: "854566494004707379", // Channel Id 
			mentions: "<@!331382684188409857> :", // People to be Mentioned
		}
	]

	guilds.forEach((x) => {
		let guild = client.guilds.cache.get(x.guildId);
		let freeGamesChannel = guild.channels.cache.get(x.channelId);

		let newMessage = message.content.replace("@Free Games:", x.mentions);
		freeGamesChannel.send({ content: newMessage})
		let dateNow = new Date().getHours() + "." + new Date().getMinutes() + "." + new Date().getSeconds()
		// logFile(message, dateNow)
	})
})
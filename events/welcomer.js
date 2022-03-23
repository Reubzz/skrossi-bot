const client = require("../index");
const canvas = require("discord-canvas");
const { MessageAttachment, MessageEmbed, Message, Client, Intents, WelcomeChannel } = require("discord.js")


client.on("guildMemberAdd", async(member) => {
    if(member.guild.id === '749948917940092938'){

		const welcomeChannel = member.guild.channels.cache.get('750015958894248037')
		if(!welcomeChannel) return;

		const image = new canvas.Welcome()
        	.setBackground("https://i.imgur.com/uKG4B2B.png")
        	.setUsername(member.user.username)
        	.setDiscriminator(member.user.discriminator)
        	.setAvatar(member.user.displayAvatarURL({ format: 'png' }))
        	.setMemberCount(member.guild.memberCount)
        	.toAttachment()

		const attachment = new MessageAttachment((await image).toBuffer(), 'welcome.png');

		const emojis = {
			bitsBlue: member.guild.emojis.cache.find(emoji => emoji.name == "Sk_bits2"),
			bitsRed: member.guild.emojis.cache.find(emoji => emoji.name == "Sk_bits1"),
			rightArrow: member.guild.emojis.cache.find(emoji => emoji.name == "Sk_Arrow_Right"),
		}
    const channels = {
      about: "749953399037886555",
      verify: "876719106668249089",
      rules: member.guild.rulesChannel ? `${member.guild.rulesChannel}` : "`None`",
      help: "749954190163312650"
    }

		const welcomeTxt = `☆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━☆\n` +
							`      ${emojis.bitsBlue} Welcome to ${member.guild.name}'s Discord Server ${emojis.bitsBlue}\n` +
							`☆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━☆\n\n` +
							`Hey <@${member.user.id}>, \n` +
							`Be sure to check out ${channels.rules} and follow them!\n` +
							`> ${emojis.rightArrow} <#${channels.about}> to know about SkRossi.\n` +
							`> ${emojis.rightArrow} <#${channels.verify}> Gain access to the server here!!\n\n` +
							`Use <#${channels.help}> to address any problems you have about the server!!`

		welcomeChannel.send({ content: welcomeTxt, files: [attachment]})}
})
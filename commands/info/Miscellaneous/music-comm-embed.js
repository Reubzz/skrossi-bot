const { Client, Message, MessageActionRow, MessageButton } = require("discord.js");
const emojis = {
  pepe_music: '<a:pepe_music:858615201326563338>',
  arrowRight: '<a:ArrowRight:776785442946940938>',
}

module.exports = {
    name: "musicembed",
    ownerOnly: true,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
      const embed = {
        title: `${emojis.pepe_music} **Music Bot Commands** ${emojis.pepe_music}`,
        color: '#2F3136',
        fields: [
          {
            name: `**__Hydra__** ${emojis.arrowRight} \`.\``,
            value: 'Play - `.p/play <song name>`\n'+
                    'Pause - `.pause`\n'+
                    'Skip - `.skip`\n'+
                    'Loop - `.loop`\n'+
                    'Stop - `.dc`\n\n'+
                    '__For More Commands__ `.help` | **[Click Here](https://hydra.bot/commands)**',
            inline: true,
          },
          {
            name: `\u200B`,
            value: '\u200B',
            inline: true,
          },
          {
            name: `**__Probot__** ${emojis.arrowRight} \`?\``,
            value: 'Play - `?p/play <song name>`\n'+
                    'Pause - `?pause`\n'+
                    'Skip - `?skip`\n'+
                    'Loop - `?loop`\n'+
                    'Stop - `?dc`\n\n'+
                    '__For More Commands__ **[Click Here](https://probot.io/commands)**',
            inline: true,
          },
          {
            name: `\u200B`,
            value: '\u200B',
            inline: false,
          },
          {
            name: `**__Dash Radio__** ${emojis.arrowRight} \`$\` | \`@bot\``,
            value: 'Play - `$play <station name>`\n'+
                    'Lists all Genres - `$genres`\n'+
                    'List Stations - `$list <genre>`\n'+
                    'Now Playing - `$Np`\n'+
                    'Stop - `$stop`\n\n'+
                    '__For More Commands__ **[Click Here](https://probot.io/commands)**',
            inline: true,
          },
          {
            name: `\u200B`,
            value: '\u200B',
            inline: true,
          },
          {
            name: `\u200B`,
            value: '\u200B',
            inline: true,
          },
          {
            name: '\u200B',
            value: `- [Old Lofi](https://youtube.com/playlist?list=PL3P0GR7as0VtQqap5wqQBWlcEZbj0-qFj)\n`+
                  `- [Musix Galaxy](https://open.spotify.com/playlist/5k1ETAe11mRxIjZDT8QD68?si=fSGjQSMjSqChfjGmpfO6ew&nd=1)\n`+
                  `- [Habitual by Solo](https://open.spotify.com/playlist/0A8QT0aJuKM3GqQ8klQrus?si=gHb8HudySviBowcGamKlyg)\n`,
            inline: true,
          },
          {
            name: '​__Some Playlists__:',
            value: `- [Slow Indie](https://open.spotify.com/playlist/5tfifgEACcsC57GI1bxoKw?si=-iw0QnKgSziD1tbgcDyB6g)\n`+
                  `- [Pop Songs](https://open.spotify.com/playlist/4kvSlabrnfRCQWfN0MgtgA?si=a651d73608654d39)\n`,
            inline: true,
          },
          {
            name: '\u200B',
            value: `- [Hindi (2010 - 2020)](https://open.spotify.com/playlist/4wJLkwU84uscxJ7SOlmUX1)\n`+
                  `- [Hindi 2](https://youtube.com/playlist?list=PLvLguixco1IabyMpBRum369fNSQcaeNa3)\n`,
            inline: true,
          },
        ]
        
      }

      message.channel.send({ embeds: [embed] })
      message.delete()
    }  
};
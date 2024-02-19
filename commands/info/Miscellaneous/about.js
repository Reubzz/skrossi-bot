const { Client, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: 'about',
  description: 'About Command for SkRossi\'s Discord',
  ownerOnly: true, 

  /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

  run: async (client, message, args) => {
    const about = {
      "title": "Basic Info:",
      "color": 3092790,
      "fields": [
        {
          "name": "Name:",
          "value": "Ganesh \"SkRossi\" Gangadhar"
        },
        {
          "name": "Birthday & Age:",
          "value": "October 12, 1997\n(26 Years Old)"
        },
        {
          "name": "Nationality:",
          "value": "<a:India:860945051694006282> Indian",
          "inline": true
        },
        {
          "name": "City:",
          "value": "Bangalore",
          "inline": true
        },
        {
          "name": "Years Active:",
          "value": "2018 - Present"
        },
        {
          "name": "Current Team:",
          "value": "<:Revenant:1209167785197047879> Revenant Esports",
          "inline": true
        },
        {
          "name": "Role:",
          "value": "Play Maker",
          "inline": true
        },
        {
          "name": "\u200B",
          "value": "\u200B",
        },
        {
          "name": "Socials:",
          "value": "<a:Instagram:841257539294986270> [Instagram](https://www.instagram.com/skrossi_)\n<:Twitter:841257431421550602> [Twitter](https://twitter.com/skrossigg)\n<:Facebook:860850821314379778> [Facebook](https://www.facebook.com/skrossigg)",
          "inline": true
        },
        {
          "name": "Others:",
          "value": "<:Liquipedia:860942233243090994> [Liquipedia](https://liquipedia.net/valorant/SkRossi)\n<:VLR:860941681229955102> [VLR.gg](https://www.vlr.gg/player/4095/skrossi)\n<:HLTV:860942501823905832> [HLTV](https://www.hltv.org/player/19131/SkRossi)",
          "inline": true
        },
        {
          "name": "Streaming:",
          "value": "<:YouTube:860949767386300429> [SkRossi](https://www.youtube.com/SkRossi)",
          "inline": true
        }
      ],
      "author": {
        "name": "SkRossi - Official Kreo Athlete",
        // "url": "https://www.youtube.com/SkRossi",
        "icon_url": "https://i.imgur.com/iQnqPkM.png"
      },
      "footer": {
        "text": "\"About SkRossi\" | By - Reubz",
        "icon_url": "https://i.imgur.com/iQnqPkM.png"
      },
      "timestamp": "2024-02-19T16:20:40Z",
      "image": {
        "url": "https://i.imgur.com/MlJRSZd.png?1"
      }
    }

    const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('Youtube')
                .setStyle('LINK')
                .setEmoji("861892278205415444")
                .setURL('https://youtube.com/c/skrossi'),
            new MessageButton()
              .setLabel('Instagram')
              .setStyle('LINK')
              .setEmoji('841257539294986270')
              .setURL('https://www.instagram.com/skrossi_'),
            new MessageButton()
              .setLabel('Twitter')
              .setStyle('LINK')
              .setEmoji('841257431421550602')
              .setURL('https://twitter.com/skrossigg'),
            )
            

    message.channel.send({ embeds: [about], components: [row] })
  }

}
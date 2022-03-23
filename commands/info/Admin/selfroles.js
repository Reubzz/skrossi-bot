const { Message, MessageActionRow, MessageButton } = require("discord.js");

// Roles 
const freeGamesRole = '781859871183339550';
const casinoRole = '749961603889365003';
const valorantRole = '836212808545730633';
const genshinRole = '836222337224933416';
const apexLegendsRole = '836213081671204904';
const csgoRole = '836212571282472980';
const lolRole = '836213003468537917';
const codWarzoneRole = '836212926288625684';

const socialNoti = '950336615761453116';

module.exports = {
    name: 'sf',
    description: 'This is a Self Roles Command',
    ownerOnly: true,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const selfRolesEmbed = {
            author: {
              name: 'Self Roles',
              //icon_url: 'https://i.imgur.com/XeC2hiY.png',
              url: 'https://youtube.com/c/skrossi',
            },
            title: 'Channel Access Roles',
            description: `> <@&${freeGamesRole}>\n > Get Pinged in <#750679324230680588> for each freebie\n\n > <@&${casinoRole}>\n > Get Pinged in <#821034169269485618> for Casino Cash Giveaways`,
            color: '#2f3136',
        //     fields: [
        //         {
        //           name: '\u200B',
        //           value: '\u200B',
        //         },
								// {
        //           name: 'Notification Pings',
        //           value: `> <@&${socialNoti}> - Get Pinged for every Social Media Post.`,
        //         },
								// {
        //           name: '\u200B',
        //           value: '\u200B',
        //         },
        //         {
        //             name: 'Game Roles',
        //             value: `\`[You may be pinged in \`<#750672623444164648>\`by Others]\`\n\n> <a:Sk_Valorant:836174987866013706> <@&${valorantRole}>\n\n > <:Sk_Logo_csgo:785873905201315860> <@&${csgoRole}>\n\n > <:Sk_Apex_Legends:836194756231954442> <@&${apexLegendsRole}>\n\n > <:Sk_Genshin_Impact:836196887253090325> <@&${genshinRole}>\n\n > <:Sk_LOL_Wild_Rift:836194866089426974> <@&${lolRole}>\n\n > <:Sk_COD:836199524917706832> <@&${codWarzoneRole}>`,
        //             inline: false,
        //         },
        //     ],
            footer: {
                text: 'Click the appropriate Button to get the Role listed above!\nSetup By | Reubz',
            }
        };
				const embed2 = {
						author: {
              name: 'Self Roles',
              //icon_url: 'https://i.imgur.com/XeC2hiY.png',
              url: 'https://youtube.com/c/skrossi',
            },
            title: 'Game Roles',
            description: `\`[You may be pinged in \`<#750672623444164648>\`by Others]\`\n\n> <a:Sk_Valorant:836174987866013706> <@&${valorantRole}>\n\n > <:Sk_Logo_csgo:785873905201315860> <@&${csgoRole}>\n\n > <:Sk_Apex_Legends:836194756231954442> <@&${apexLegendsRole}>\n\n > <:Sk_Genshin_Impact:836196887253090325> <@&${genshinRole}>\n\n > <:Sk_LOL_Wild_Rift:836194866089426974> <@&${lolRole}>\n\n > <:Sk_COD:836199524917706832> <@&${codWarzoneRole}>`,
            color: '#2f3136',
						footer: {
                text: 'Click the appropriate Button to get the Role listed above!\nSetup By | Reubz',
            }
				}
				const embed3 = {
						author: {
              name: 'Self Roles',
              //icon_url: 'https://i.imgur.com/XeC2hiY.png',
              url: 'https://youtube.com/c/skrossi',
            },
            title: 'Notification Pings',
            description: `> <@&${socialNoti}> - Get Pinged for every Social Media Post.`,
            color: '#2f3136',
						footer: {
                text: 'Click the appropriate Button to get the Role listed above!\nSetup By | Reubz',
            }
				}

        const row1 = new MessageActionRow().addComponents(
            new MessageButton().setStyle('PRIMARY').setLabel('Free Games').setCustomId('freegamesrole'),
            new MessageButton().setStyle('PRIMARY').setLabel('Casino Role').setCustomId('casinorole'),
        )
				const row2 = new MessageActionRow().addComponents(
						new MessageButton().setStyle('SUCCESS').setLabel('Socials Ping').setCustomId('socialnoti')
				)
        const row3 = new MessageActionRow().addComponents(
            new MessageButton().setStyle('SECONDARY').setLabel('Valorant').setCustomId('valorantrole').setEmoji('836174987866013706'),
            new MessageButton().setStyle('SECONDARY').setLabel('CS:GO').setCustomId('csgorole').setEmoji('785873905201315860'),
            new MessageButton().setStyle('SECONDARY').setLabel('Apex Legends').setCustomId('apexlegendsrole').setEmoji('836194756231954442'),
            new MessageButton().setStyle('SECONDARY').setLabel('Genshin Impact').setCustomId('genshinrole').setEmoji('836196887253090325'),
            new MessageButton().setStyle('SECONDARY').setLabel('LOL Wildrift').setCustomId('lolrole').setEmoji('836194866089426974'),
        )
        const row4 = new MessageActionRow().addComponents(
            new MessageButton().setStyle('SECONDARY').setLabel('COD Warzone').setCustomId('codrole').setEmoji('836199524917706832')
        )

        message.delete()
        message.channel.send({ embeds: [selfRolesEmbed], components: [row1] })
        message.channel.send({ embeds: [embed3], components: [row2] })
        message.channel.send({ embeds: [embed2], components: [row3, row4] })
			
        
    }
}
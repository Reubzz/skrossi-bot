const { Client, Message, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');
const emojis = {
    arrowRight: '<:arrowRight:898469274308476928>',
    gold: '<:Gold:943764110217207868>',
    plat: '<:Platinum:943764110213005343>',
    dia: '<:Diamond:943764109286056020>',
    imm: '<:Immortal:943764110041051188>',
    rad: '<:Radiant:943764109655175208>',
    borderStart: '<:Sk_outline1:842780463517138984><:Sk_outline2:842780889397461042><a:Sk_chipped:842777088771358720>',
    borderEnd: '<a:Sk_chipped:842777088771358720><:Sk_outline1:842780463517138984><:Sk_outline2:842780889397461042>',
}
const membershipEmojis = {
    e1: '<:Sk_forsken:829689130229039114>',
    e2: '<:SkRossi_Shocked:793413958761316352>',
    e3: '<:SkRossi_Cool:762556272724803614>',
    e4: '<:Sk_pepe_nani:788777369708134401>',
    e5: '<:Sk_Kekw_Sad:799162658225520642>',
    e6: '<:Sk_Text_NHK:799157797185912842>',
    e7: '<:Sk_Text_Kal_Aana:800638156507578408>',
    e8: '<:Sk_kekw:759276208558702602>',
    e9: '<:Sk_Sage_Thumbs_Up:799146392395448340>',
    e10: '<:Sk_pepe_FeelsBadMan:778567931792850990>',
    e11: '<:Sk_Peepo_Useless:841674034407800843>',
    e12: '<:Sk_pog:829366438618726451>',
    e13: '<:gege:943786463290589216>',
    e14: '<:doggo_ok:943802309144608768>',
    e15: '<:Sk_Sage_Heart:799146372649058325>',
    e16: '<:F_:773771676352643092>',
}

module.exports = {
    name: 'membership-info',
    description: 'Command Description',
    ownerOnly: true,
    toggleOff: false,
    botpermissions: ["SEND_MESSAGES"],

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        let embed = new MessageEmbed()
            .setTitle(' ⁣ ⁣                 **__YouTube Memberships__**')
            .setColor("#2f3136")
            .setDescription('\u200B')
            .addFields([
                {
                    name: '⁣ ⁣ ⁣                            __Loyalty Badges__',
                    value: ` ⁣ \n` +
                    				`**New Member** ⁣ ⁣ ⁣${emojis.arrowRight} ⁣ ⁣${emojis.gold}\n\n` +
                            ` ⁣ ⁣ ⁣**1 Month** ⁣ ⁣   ⁣${emojis.arrowRight} ⁣ ⁣${emojis.plat}\n\n` +
                            ` ⁣ ⁣ **⁣2 Months** ⁣ ⁣ ${emojis.arrowRight} ⁣ ⁣${emojis.dia}\n\n` +
                            ` ⁣ ⁣ **6 Months** ⁣ ⁣ ${emojis.arrowRight} ⁣ ⁣${emojis.imm}\n\n` +
                            ` ⁣ ⁣**12 Months** ⁣  ${emojis.arrowRight} ⁣ ⁣${emojis.rad}\n\n` +
                            ` ⁣ **⁣24 Months** ⁣  ⁣${emojis.arrowRight} ⁣ ⁣${emojis.rad}`+
														`\n\n⁣ ⁣ `
                },
                {
                    name: '⁣ ⁣ ⁣                            __Custom Emojis__',
                    value: `⁣ ⁣ \n`+
														`${membershipEmojis.e1} ${membershipEmojis.e2} ${membershipEmojis.e3} ${membershipEmojis.e4} ${membershipEmojis.e5} ${membershipEmojis.e6} ${membershipEmojis.e7} ${membershipEmojis.e8} ${membershipEmojis.e9} ${membershipEmojis.e10} ${membershipEmojis.e11} ${membershipEmojis.e12} ${membershipEmojis.e13} ${membershipEmojis.e14} ${membershipEmojis.e15} ${membershipEmojis.e16}`+
                            `\n\n*More Emojis will be added eventually*`+
                            `\n> If you want to replace any one of the emojis with something else kindly Contact - <@331382684188409857>`+
														`\n\n⁣ ⁣ `
                },
                {
                    name: '⁣ ⁣ ⁣                       __Membership Tiers & Perks__',
                    value: `\u200B`
                },
                {
                    name: ` ⁣ ⁣                ${emojis.borderStart} **__SkGang__ - Rs 59/month**  ${emojis.borderEnd}`,
                    value: `> Loyalty badges next to your name in comments and live chat badge` +
                            `\n\n`+
                            `> Custom emoji to use in comments and live chat`+
                            `\n\n`+
                            `> Access to members-only live chat`+
                            `\n\n`+
                            `> No Slowmode`+
                            ` \n\n`+
                            `> Exclusive Discord Role`+
														`\n\n⁣ ⁣ `
                },
                {
                    name: ` ⁣ ⁣              ${emojis.borderStart} **__SkHomies__ - Rs 159/month**  ${emojis.borderEnd}`,
                    value: `*\`Access to perks from previous level/s\`*`+
                            `\n`+
                            `> Access to Member Games`+
                            `\n\n`+
                            `> Shoutouts On-Streams`+
                            `\n\n⁣ ⁣ `
                },
                {
                    name: ` ⁣ ⁣              ${emojis.borderStart} **__SkFamily__ - Rs 599/month**  ${emojis.borderEnd}`,
                    value: `*\`Access to perks from previous level/s\`*`+
                            `\n`+
                            `> Reserved Slot in Member Games`+
                            ` \n\n`+
                            `> On Stream Reaction For Your Videos (Should be NCS)`+
                            ` \n\n`+
                            `> Demo Review (Gameplay Review)`+
														`\n\n⁣ ⁣ `
                },
                {
                    name: ` ⁣ ⁣              ${emojis.borderStart} **__Superk1ds__ - Rs 1,599/month**  ${emojis.borderEnd}`,
                    value: `*\`Access to perks from previous level/s\`*`+
                            `\n`+
                            `> Call on Discord Whenever You Want.`+
                            ` \n\n`+
                            `> Early access to new videos`+
                            ` \n\n`+
                            `> A Special WhatsApp Group\n`+
                            `> *Contact - <@331382684188409857> to get Added*`
                },
                {
                    name: '\u200B',
                    value: '**If you face any issues regarding Memberships contact any of the <@&749958783756927027> or <@331382684188409857>.**'+
                            '\n\n**Click Button below to get redirected to SkRossi\'s YT Memberships Page**'+
														`\n ⁣ `
                }
            ])
            .setFooter('The above mentioned Membership Tiers/Perks can be changed anytime in the Future, Members will be informed via Discord Announcements.')

            const row1 = new MessageActionRow().addComponents(
                new MessageButton()
                    .setLabel('Join Now!!')
                    .setURL('https://www.youtube.com/skrossi/join')
                    .setStyle('LINK'),
            )
        


        message.channel.send({ embeds: [embed], components: [row1] })
    }
};
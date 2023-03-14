const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { Modal, TextInputComponent, showModal } = require('discord-modals');
const suggestionsDB = require('../../../models/Databases/suggestion');
const config = require('../../../config.json')
const reqRole = require('../../../models/Functions/reqRolesCheck')


module.exports = {
    name: 'suggest',
    description: '.',
    noDefer: true,
    userPermissions: ["SEND_MESSAGES"],
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'new',
            description: 'Post your Suggestion.',
            type: 'SUB_COMMAND',
        },
        {
            name: 'accept',
            description: 'Accepts a Suggestion.',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'special-id',
                    description: 'Special Id of the Suggestion',
                    required: true,
                    type: 'STRING',
                },
            ]
        },
        {
            name: 'deny',
            description: 'Denies a Suggestion.',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'special-id',
                    description: 'Special Id of the Suggestion',
                    required: true,
                    type: 'STRING',
                },
                {
                    name: 'reason',
                    description: 'Reason why you reject this Suggestion',
                    required: false,
                    type: 'STRING',
                },
            ]
        }
    ],
    
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    run: async (client, interaction, args) => {
        let specialId = interaction.options.getString('special-id')
        let reason = interaction.options.getString('reason') || 'No Reason Provided'
        let [sub] = args
        let suggestionChannel = interaction.guild.channels.cache.find((x) => x.id == `${config.suggestionChannel}`);
        
        // New
        if(sub == 'new'){
            const modal = new Modal()
                .setCustomId('suggestion-modal')
                .setTitle('Suggestion System')
                .addComponents([
                    new TextInputComponent()
                    .setCustomId('suggestion-title')
                    .setLabel('The Title/Main Subject of your Suggestion')
                    .setStyle('SHORT')
                    .setMinLength(5)
                    .setMaxLength(30)
                    .setPlaceholder('Eg: Suggestion to Change Role Colors')
                    .setRequired(true),
                    new TextInputComponent()
                    .setCustomId('suggestion-description')
                    .setLabel('Describe your Suggestion. (Elaborate here)')
                    .setStyle('LONG')
                    .setMinLength(2)
                    .setMaxLength(1024)
                    .setPlaceholder('Eg. Change Role Color for XYZ Role to BLUE')
                    .setRequired(true)
            ])
            
            showModal(modal, {
                client: client,
                interaction: interaction
            })
        }

        // Accept
        if(sub == 'accept'){

            const checker = await reqRole.reqRolesChecker(interaction, "suggestionSys", { embed: false });
            if(checker.checkRoles == 0) {
                interaction.reply({ 
                    content: `You aren't permitted to use this Command!! \nContact <@331382684188409857> if you think this is a Issue.`, 
                    ephemeral: true,
                    allowedMentions: { parse: [] }
                })
                return;
            }

            const suggestion = await suggestionsDB.findOne({ specialId: specialId});
            if(!suggestion){
                return interaction.reply({ content: 'Invalid Special ID', ephemeral: true })
            }
            const u = await interaction.guild.members.fetch(`${suggestion.user}`)
            let denyEmbed = new MessageEmbed()
                .setAuthor(`${u.user.username}`, `${u.displayAvatarURL()}`)
                .setTitle('ACCEPTED || ' + suggestion.sugTitle)
                .setDescription(suggestion.sugDesc)
                .setColor('GREEN')
                .setFooter('Use /suggest to submit your Suggestions')
                .addFields(
                    {
                        name: 'Accepted By:',
                        value: `${interaction.user}`
                    }
                )
                .setTimestamp()
            
            
            suggestionChannel.messages.edit(`${suggestion.messageId}`, ({ embeds: [denyEmbed] }))
            await suggestionsDB.deleteMany({specialId: specialId})
            interaction.reply({ content: `Suggestion with id - \`${specialId}\` Accepted!!`, ephemeral: true })

        }

        // Deny
        if(sub == 'deny'){
            const checker = await reqRole.reqRolesChecker(interaction, "suggestionSys", { embed: false });
            if(checker.checkRoles == 0) {
                interaction.reply({ 
                    content: `You aren't permitted to use this Command!! \nContact <@331382684188409857> if you think this is a Issue.`, 
                    ephemeral: true,
                    allowedMentions: { parse: [] }
                })
                return;
            }

            const suggestion = await suggestionsDB.findOne({ specialId: specialId});
            if(!suggestion){
                return interaction.reply({ content: 'Invalid Special ID', ephemeral: true })
            }
            const u = await interaction.guild.members.fetch(`${suggestion.user}`)
            let denyEmbed = new MessageEmbed()
                .setAuthor(`${u.user.username}`, `${u.displayAvatarURL()}`)
                .setTitle('DENIED || ' + suggestion.sugTitle)
                .setDescription(suggestion.sugDesc)
                .setColor('RED')
                .addFields(
                    {
                        name: 'Reason:', 
                        value: `\`\`\`${reason}\`\`\``,
                    },
                    {
                        name: 'Denied By:',
                        value: `${interaction.user}`
                    }
                )
                .setFooter('Use /suggest to submit your Suggestions')
                .setTimestamp()
            
            
            suggestionChannel.messages.edit(`${suggestion.messageId}`, ({ embeds: [denyEmbed] }))
            await suggestionsDB.deleteMany({specialId: specialId})
            interaction.reply({ content: `Suggestion with id - \`${specialId}\` denied!!`, ephemeral: true })

        }
    }
};
const { Client, CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');
const ranksDB = require('simply-xp/src/models/level')

module.exports = {
    name: 'set-level',
    description: 'Sets a new level to the user',
    userPermissions: ["ADMINISTRATOR"],
    options: [
        {
            name: 'user',
            description: 'Targer User',
            required: true, 
            type: 'USER',
        },
        {
            name: 'level',
            description: 'The New Level',
            required: true,
            type: 'NUMBER'
        }
    ],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const targetMember = interaction.options.getUser('user') || interaction.user;
        const level = interaction.options.getNumber('level');

				await xp.setLevel(interaction, targetMember.id, interaction.guild.id, level)

				interaction.followUp({ content: `Set ${targetMember}'s level to ${level}` })
    }
};
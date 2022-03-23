const client = require("../index");
const config = require("../config.json");
const { MessageEmbed, MessageActionRow, MessageAttachment, MessageButton } = require("discord.js");
const lvlroleDB = require('simply-xp/src/models/lvlrole');
const level = require("simply-xp/src/models/level");


const obj = {} 
const cooldown = 1000 * 60


client.on("messageCreate", async(message) => {
    if (message.author.bot || !message.guild) return;

    let time = obj[message.author.id]
    
    if(time && (time > Date.now())) return; // Checking if the user is under cooldown.
    
    xp.addXP(message, message.author.id, message.guild.id, {
        min: 15,
        max: 50
    })
    
    obj[message.author.id] = Date.now() + cooldown; // Adding Cooldown to Users.

    xp.lvlRole(message, message.author.id, message.guild.id) // Level Roles Core.
})
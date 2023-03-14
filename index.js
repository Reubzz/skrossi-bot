const { Client, Collection } = require("discord.js");
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT; // To work with Railway

app.get('/', (req, res) => res.send("Working ........"));

app.get('/leaderboard/:gid', (req, res) => {
    let guild = client.guilds.cache.get(`${req.params.gid}`);
    try {
        xp.leaderboard(client, guild.id, 101).then((b) => {
            b.forEach((e) => {
                e.pfp = guild.members.cache.get(e.userID).displayAvatarURL({ format: "png" })
            });
            res.send(b)
        })
    } catch (e) {
        if(e === TypeError){
            res.send(e)
        }
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const client = new Client({ intents: 32767, });
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Discord Modals
const discordModals = require('discord-modals') // Define the discord-modals package!
discordModals(client);

// Global Variables - Leveling system

const xp = require('simply-xp')
xp.connect(client.config.mongooseConnectionString)
global.xp = xp

// Log File 
let fs = require('fs');
let util = require('util');

logFile = function(d, fileName) { //
    let log_file = fs.createWriteStream(__dirname + "/logs/" + fileName + ".log", {flags : 'w'});
    let log_stdout = process.stdout;

    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
global.logFile = logFile

// Initializing the project
require("./handler")(client);

client.login(process.env.TOKEN);

const { Client, Collection } = require("discord.js");
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT; // To work with Railway

app.get('/', (req, res) => res.status(200).send("Working OK"));

app.get('/leaderboard/:gid', (req, res) => {
    let GUILD_ID = req.params.gid;
    let guild = client.guilds.cache.get(`${GUILD_ID}`);
    if (!guild) {
        res.status(404).send("Incorrect Guild Id Supplied");
    }
    try {
        xp.leaderboard(client, guild.id, 101).then(async (users) => {
            await users.forEach((user) => {
                user.pfp = guild.members.cache.get(user.userID).displayAvatarURL({ format: "png" })
                user.serverName = guild.name;
                user.serverIcon = guild.iconURL({ format: "png" }) + "?size=4096";
                user.serverLevels = [
                    { lvl: '5', role: guild.roles.cache.get('749959207507329086').name.replace(/ /gi, '') },
                    { lvl: '10', role: guild.roles.cache.get('749959601168056429').name.replace(/ /gi, '') },
                    { lvl: '20', role: guild.roles.cache.get('749959920660512768').name.replace(/ /gi, '') },
                    { lvl: '50', role: guild.roles.cache.get('749960092102951035').name.replace(/ /gi, '') },
                    { lvl: '100', role: guild.roles.cache.get('749960196381474976').name.replace(/ /gi, '') }
                ]
            });
            res.send(users)
        })
    } catch (e) {
        if (e === TypeError) {
            res.status(404).send(e)
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

logFile = function (d, fileName) { //
    let log_file = fs.createWriteStream(__dirname + "/logs/" + fileName + ".log", { flags: 'w' });
    let log_stdout = process.stdout;

    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
global.logFile = logFile

// Initializing the project
require("./handler")(client);

client.login(process.env.TOKEN);

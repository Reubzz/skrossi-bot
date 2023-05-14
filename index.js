const { Client, Collection } = require("discord.js");
require('dotenv').config();
db = require('simply-xp/src/models/lvlrole');

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

            // Building full server level roles data object 
            let serverLevels = [];
            (await db.find().sort({ lvl: 1 }))[0].lvlrole.forEach((level) => {
                serverLevels.push({
                    lvl: level.lvl, // level number
                    role: guild.roles.cache.get(level.role).name.replace(/ /gi, ''), // Role name
                    color: guild.roles.cache.get(level.role).hexColor,  // role color
                })
            });

            // Building user object to be sent by API
            await users.forEach(async (user) => {
                user.pfp = guild.members.cache.get(user.userID).displayAvatarURL({ format: "png" })
                user.serverName = guild.name;
                user.serverIcon = guild.iconURL({ format: "png" }) + "?size=4096";
                user.serverLevels = serverLevels;
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

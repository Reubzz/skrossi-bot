const { Client, Collection } = require("discord.js");
require('dotenv').config();
db = require('simply-xp/src/models/lvlrole');

const express = require('express');
const path = require("path");

const port = process.env.PORT; // To work with Railway
const app = express();
app.use(express.static("public"));
app.use(express.json());


app.use('/', require(path.join(__dirname, "/api/main.js")));
app.use('/leaderboard', require(path.join(__dirname, "/api/leaderboard.js")));
app.use('/valorant/rank', require(path.join(__dirname, "/api/valorant/rank.js")));
app.use('/valorant/agent', require(path.join(__dirname, "/api/valorant/agent.js")));
app.use('/valorant/playtime', require(path.join(__dirname, "/api/valorant/playtime.js")));



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const client = new Client({ intents: 32767, });
module.exports = client;

global.clientt = client 
/**
 * for the above line 24 code - made "clientt" a global variable so it can be accessed from anywhere 
 * like in the leaderboard api route (/api/leaderboard.js)
 * where there is no way to import the discord bot client - which is basically an instance of the bot.
 * this will allow the client to be accessed globally without any interference with existing codebase as the name is 'clientt' 
 * with a double "T" 
 * single "T" is used in all other places related to the discord bot, its commands and its functionality. 
 * 
 * hence forth 'clientt' (the one with double T) is meant to be used in all places not related to the discord bot - like the api. to avoid confusion.  
 * 
 * 
 *  ! A better method for the same can be found out later as of 18/11/2023 this seems like the most easiest and fastest fix right now. 
 */

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

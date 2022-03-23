const { Client, Collection } = require("discord.js");
require('dotenv').config();

const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.sendFile(__dirname+'/website/index.html'));
app.use('/commands', express.static('./website/commands'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const client = new Client({ intents: 32767, });
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

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

// client.login(process.env.TOKEN);

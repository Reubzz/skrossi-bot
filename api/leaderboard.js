const express = require('express');
const router = express.Router();
const path = require('path');
// const {client}  = require('../index.js')

router.get('/:gid', (req, res) => {
    let GUILD_ID = req.params.gid;
    let guild = clientt.guilds.cache.get(`${GUILD_ID}`);
    if (!guild) {
        res.status(404).send("Incorrect Guild Id Supplied");
    }
    try {
        xp.leaderboard(clientt, guild.id, 101).then(async (users) => {

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

module.exports = router;

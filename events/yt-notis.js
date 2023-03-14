const client = require("../index");
const config = require('../config.json');
const ytnotifier = require('youtube-notification-module')
const db = require('../models/Databases/yt-noti')


const Notifier = new ytnotifier({
    channels: [
        "UCqMD62KqHngn6ovS-eAdOHw", // SkRossi
    ],
    checkInterval: 60
})
Notifier.on('video', async v => {
    
    let data = await db.findOne({ ytName: "SkRossi" })
    let message = `Hey @everyone, **${v.channelName}** just posted a video.\n\n> **${v.title}**\n\nLink: ${v.url}`

    let g = client.guilds.cache.get(data.gid)
    let c = g.channels.cache.get(data.channelId)
    c.send({
      content: message,  
    })
})

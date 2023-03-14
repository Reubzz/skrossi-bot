const mongoose = require("mongoose");

const ytNotis = new mongoose.Schema({
    gid: { type: String },
    channelId: { type: String },
    ytId: { type: String },
    ytName: { type: String }
})

module.exports = mongoose.model('yt-notis', ytNotis)
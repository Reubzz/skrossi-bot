const express = require('express');
const router = express.Router();
const path = require('path');
const { rank } = require('simply-xp');
const { API } = require('vandal.js')

/**
 * 
 * ! DESCRIPTIon : This Api shows the rank and the rr of the player (rr is only shown if Imortal+)
 * 
 * 
 *  * Compulsory Statement 
 *  ? const user = await API.fetchUser(username, tag) // user#tag
 *  * Methods
 *  !    user.info()
 *  !    user.ranked();
 *  !    user.unrated();
 *  !    user.agents();
 *  !    user.gamemodes();
 */

router.get('/:name/:tag', async (req, res) => {  
    const username = encodeURI(req.params.name);
    const tag = encodeURI(req.params.tag);
    try {
        const user = await API.fetchUser(username, tag) // user#tag
        const info = user.info()
        const ranked = user.ranked();
        let rr = ranked.rank == null ? " " : `- ${ranked.rank} RR`;
        
        res.send(`${info.rank} ${rr}`)
    } catch (err) {
        console.log(err)
        res.send(err)
    }  
})

module.exports = router;

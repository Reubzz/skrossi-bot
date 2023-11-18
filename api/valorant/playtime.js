const express = require('express');
const router = express.Router();
const path = require('path');
const { API } = require('vandal.js')


/**
 *  ! DESCRIPTION : This command shows the playtime of the player 
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
        const ranked = user.ranked();

        res.send(`Playtime - ${ (ranked.timePlayed / 3600).toFixed(1) } hrs`)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


module.exports = router;

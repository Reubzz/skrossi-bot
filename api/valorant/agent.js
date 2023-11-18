const express = require('express');
const router = express.Router();
const path = require('path');
const { rank } = require('simply-xp');
const { API } = require('vandal.js')


/**
 * 
 * ! DESCRIPTION : Shows the most used agent of the player with total number of games
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
        const agents = user.agents();
        
        let mostUsed = 0;
        let agentName = 'null';
        for ( let agent in agents ) {
            if (mostUsed < agents[agent].matchesPlayed) {
                mostUsed = agents[agent].matchesPlayed;
                agentName = agent;
            }
        }

        res.send(`${agentName} - ${mostUsed} games`)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


module.exports = router;

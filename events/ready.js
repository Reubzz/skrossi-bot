const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} is up and ready to go!`)

		client.user.setActivity('Valorant', {type: 'PLAYING' })
  	client.user.setStatus('idle')	
});

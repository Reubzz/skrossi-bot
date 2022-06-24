const { CommandInteractionOptionResolver } = require("discord.js");
const client = require("../index");
const config = require("../config.json")
let { Database } = require('quickmongo');
let db = new Database(config.mongooseConnectionString);
const simplydjs = require("simply-djs");

client.on("interactionCreate", async (interaction) => {

    // Slash Command Handling
    
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }

    // Context Menu Handling 

    if(interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }

    // Suggestion System

    simplydjs.suggestBtn(interaction, db)

    // --- Buttons Command Handler -- 

    if(interaction.isButton()) {
        const member = interaction.guild.members.cache.get(interaction.user.id)
        
			
        // Verify Command 
        if(interaction.customId === 'Verify'){
			await interaction.deferReply({ ephemeral: true }).catch(() => {});
            const verifiedRole = '749958590323752981'
            member.roles.add(verifiedRole)
            interaction.editReply({ content: 'You are now Verified', ephemeral: true });
        }


        // Self Roles Command 
		const selfRolesArr = [
			["freeGamesRole", '781859871183339550'],
			["casinoRole", '749961603889365003'],
			["valorantRole", '836212808545730633'],
			["genshinRole", '836222337224933416'],
			["apexLegendsRole", '836213081671204904'],
			["csgoRole", '836212571282472980'],
			["lolRole", '836213003468537917'],
			["codRole", '836212926288625684'],
        	["socialNoti", '950336615761453116'],
		]

		selfRolesArr.forEach(async (x) =>{
            if(x[0].toLowerCase() != interaction.customId.toLowerCase()) return;
            let role = interaction.guild.roles.cache.find((y) => y.name === x[1]) || interaction.guild.roles.cache.find((y) => y.id === x[1])
                await interaction.deferReply({ ephemeral: true }).catch(() => {});
                switch (member.roles.cache.has(role.id)){
                    case true: 
                        await member.roles.remove(role.id);
                        interaction.editReply({ content: `Your ${role} Role was removed.`, ephemeral: true });
                        break;
                    default: 
                        await member.roles.add(role.id);
                        interaction.editReply({ content: `You were given the ${role} Role.`, ephemeral: true });
                        break;
                }
        })      

        // Color Roles Command 
		const colorRole = [
			['red', '819145771668471838'],
			['purple', '848425105339711499'],
			['green', '799164047736045569'],
			['pink', '839503255414767647'],
			['orange', '851393370524876830'],
			['yellow', '851393931421286400'],
			['cyan', '847824757717205013'],
			['black', '844441569497972776'],
		]

		colorRole.forEach(async (x) =>{
            if(x[0].toLowerCase() != interaction.customId.toLowerCase()) return;
            let role = interaction.guild.roles.cache.find((y) => y.name === x[1]) || interaction.guild.roles.cache.find((y) => y.id === x[1])
		    if(member.roles.cache.has(role.id)) member.roles.remove(role.id);
            
            await member.roles.add(role.id);
            await interaction.deferReply({ ephemeral: true }).catch(() => {});
            interaction.editReply({ content: `You were given the ${role} Role.`, ephemeral: true });
        })
    }
});

const { MessageEmbed } = require("discord.js");


module.exports = {
   name: "eval",
   aliases: ["e"],
   description: "Evaluate Code",
   toggleOff: false,
   ownerOnly: true,

   run: async (client, message, args) => {
      try {
         const code = args.join(" ");
         if (!code) {
            return message.channel.send("Please Provide A code to eval!");
         }
         let evaled = eval(code);

         if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

         let embed = new MessageEmbed()
            .setAuthor("Eval", message.author.avatarURL())
            .addField("Input", `\`\`\`${code}\`\`\``)
            .addField("Output", `\`\`\`${evaled}\`\`\``)
            .setColor("BLUE");

         message.channel.send({ embeds: [embed] });
      } catch (err) {
         message.channel.send(`\`ERROR\` \`\`\`js\n${err}\n\`\`\``);
      }
   },
};
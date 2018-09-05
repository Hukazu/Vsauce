var botconfig = require("./botconfig.json");
var Discord = require("discord.js");
var bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Vsauce...or am I?", {type: "WATCHING"})
});

bot.login(process.env.BOT_TOKEN);

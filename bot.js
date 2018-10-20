const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready',async () => {
  client.channels.find(ch => ch.id === "اي دي الروم الصوتية" && ch.type === 'voice').join();
});


client.login(process.env.BOT_TOKEN);

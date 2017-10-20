const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "t!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

 switch (command) {
  case "ping" :
    message.channel.send('Pong!');
    break;
  case "blah" :
    message.channel.send('Meh.');
    break;
  case "foo" :
    message.channel.send('Bar!');
    break;
}
});

client.login(process.env.BOT_TOKEN);

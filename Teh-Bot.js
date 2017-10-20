const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const prefix = config.prefix

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
 const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 switch (command) {
  case "ping" :
    message.channel.send('Pong!');
    break;
  case "meow" :
    let member = message.mentions.members.first();
    message.channel.send("Sending a meow!")
    member.send("Meow!").catch( message.channel.send("Completed!"))
    break;
  }
});


client.login(process.env.BOT_TOKEN);


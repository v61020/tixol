
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "t!"

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
   // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
});

client.login("SuperSecretBotTokenHere");

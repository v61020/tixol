
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
 

client.on("ready", () => {
  console.log("I am ready!")
};
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  switch (command) {
  case "ping" :
    message.channel.send('Pong!');
    break;
  case "meow" :
    let member = message.mentions.members.first();
    message.channel.send("Sending a meow!")
    member.send("Meow!").catch( message.channel.send("Completed!") )
    break;
   case "8ball" :
    var myArray = ["It is certain", "As I see it, yes", "It is decidedly so", "Without a doubt" "Yes definitely", "You may rely on it", "Outlook good", "Most likely", "Yes", "Signs point to yes", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    message.reply(rand + ".")
   break;
  }
  });

client.login(process.env.BOT_TOKEN);

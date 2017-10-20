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
   case "8ball" :
         	var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

		 var result = Math.floor((Math.random() * sayings.length) + 0);
     bot.reply(message, sayings[result]);
     break;
  case "help" :
    message.channel.send('Sending help');
    break;
}
});

client.login(process.env.BOT_TOKEN);

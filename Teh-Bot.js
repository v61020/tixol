const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "t!";

// Command list
var InformationCMDS = "help - Send help!\nhq - The HQ\ninvite - Invite me!\nping - What's the average heartbeat?";
var ModerationCMDS = "None - come back soon!";
var FunCMDS = "8ball - Q&A\nblah - Blah.\nfoo - Check this out. I can send messages!\nshard - 1v1 me bro.";
var versionIDName = ["Numb", "Tixol", "TixolPlus", "TixolPremium", "NewAge", "EndTime", "NewBeginnings"]
var versionIDNumber = "1.0.0"
var SystemList = "t!help | " + versionIDName[1]
const AnEmbed = {
  "title": "tCommands",
  "description": "The prefix is " + prefix,
  "color": 15090910,
  "fields": [
    {
      "name": "Information",
      "value": InformationCMDS,
      "inline": true
    },
    {
      "name": "Moderation",
      "value": ModerationCMDS,
      "inline": true
    },
    {
      "name": "Fun",
      "value": FunCMDS,
      "inline": true
    }
  ]
};
client.on("ready", () => {
    client.user.setPresence({game: {name: SystemList, type: 0}});
});
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

 switch (command) {
  case "ping" :
    message.channel.send({ embed: {"description": 'Pong! The ping is ' + client.ping + 'ms.', "color": 14552848} });
    break;
  case "blah" :
    message.channel.send({ embed: {"description": 'Meh.', "color": 6122365}});
    break;
  case "foo" :
    message.channel.send({ embed: {"description": 'Bar!', "color": 2671673}});
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
		 var ResultEmbed = {"title": "8ball Answer", "description": sayings[result], "color": 01301313};
     message.reply({embed: ResultEmbed});
     break;
  case "help" :
    message.reply({embed: {"description": "👌 Check your DMs, I have sent a help message!", "color": 11015181}});
    message.author.send({embed: AnEmbed})
    break;
}
});

client.login(process.env.BOT_TOKEN);

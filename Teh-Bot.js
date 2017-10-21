const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "t!";

// Command list
var InformationCMDS = "help - Send help!\nhq - The HQ\ninvite - Invite me!\nping - What's the average heartbeat?\ninfo - 1v1 me bro.\nanswer - Serious Q&A.";
var ModerationCMDS = "warn - Sends a DM to the specified user with a message saying that they've been warned.";
var FunCMDS = "8ball - Q&A\nblah - Blah.\nfoo - Check this out. I can send messages!\nannoy - **Use with caution.**\nSome people do not like being annoyed, \nbut if you can do it, you can do it.";
var versionIDName = ["Numb", "Tixol", "TixolPlus", "TixolPremium", "NewAge", "EndTime", "NewBeginnings"]
var versionIDNumber = "1.0.0"
var SystemList = "t!help | " + versionIDName[2]
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
  case "info" :
    message.reply({embed: {"description": "The servers on this shard is " + client.guilds.size + ". This server is on shard " + client.shard.id + "/7.", "color": 11015181}});
    break;
  case "help" :
    message.reply({embed: {"description": "👌 Check your DMs, I have sent a help message!", "color": 11015181}});
    message.author.send({embed: AnEmbed})
    break;
    case "answer" :
   	var sayings = [
										"Yes",
										"No",
										"Maybe",
		       "I don't know",
		       "No doubt",
		       "Doubtful",
		       "Not sure",
		       "Plenty of questions in the world I can't answer. This is one of them."
									];

		 var result = Math.floor((Math.random() * sayings.length) + 0);
		 var ResultEmbed = {"title": "My answer", "description": sayings[result], "color": 01301313};
     message.reply({embed: ResultEmbed});
		 
	break;	 
	 case "warn" :
    var member = message.mentions.members.first();
		 
		 if (!message.member.hasPermission("KICK_MEMBERS")) { message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to warn without the Kick Members permission!?"}})
								    } else if (message.mentions.users.size === 0) {
									message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to warn without mentioning ANYBODY!?"}})  
									    
								    } else {
  member.send({embed: {"title": "Warning", "color": 10196769,  "description": "You have been warned in " + message.guild.name + "."}})
message.channel.send({embed: {"title": "Success", "color": 10196769,  "description": "This troublemaker has been warned."}})	
				}
		       break;
	 case "annoy":
		 var member = message.mentions.members.first();
		 if (message.mentions.users.size === 0) {
			 message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "pls say something for annoy"}})  
		 } else {
			message.channel.send({embed: {"title": "LEL", "color": 10196769,  "description": "Are you ready for them to be ANNOYED?"}})   
			
			member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 member.send({embed: {"title": "LEL", "color": 28432738,  "description": "toi toi toi toi"}})
			 message.delete(0)
		 }
		 break;
		 

}
});


client.login(process.env.BOT_TOKEN);

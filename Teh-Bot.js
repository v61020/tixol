const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "t!";
var member = null
// Command list
var InformationCMDS = "help - Send help!\nhq - The HQ\ninvite - Invite me!\nping - What's the average heartbeat?\ninfo - 1v1 me bro.\nanswer - Serious Q&A.";
var ModerationCMDS = "warn - Sends a DM to the specified user with a message saying that they've been warned.";
var FunCMDS = "8ball - Q&A\nblah - Blah.\nfoo - Check this out. I can send messages!\nannoy - **Use with caution.**\nSome people do not like being annoyed, \nbut if you can do it, you can do it.\nannoybomb - A bigger annoyance.\nannoynuke - **DANGER!** USE THIS ONLY WITH PERMISSION OF THE PERSON YOU ARE ANNOYING\nIT COULD BE COUNTED AS HARRASMENT IF YOU DO NOT USE THIS WISELY";
var versionIDName = ["Numb", "Tixol", "TixolPlus", "TixolPremium", "NewAge", "EndTime", "NewBeginnings"]
var versionIDNumber = "1.0.0"
var SystemList = "t!help | " + versionIDName[2]
var ficmdobject = null
var ficmdobject2 = null
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
    member = message.mentions.members.first();
		 
		 if (!message.member.hasPermission("KICK_MEMBERS")) { message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to warn without the Kick Members permission!?"}})
								    } else if (message.mentions.users.size === 0) {
									message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to warn without mentioning ANYBODY!?"}})  
									    
								    } else {
  member.send({embed: {"title": "Warning", "color": 10196769,  "description": "You have been warned in " + message.guild.name + "."}})
message.channel.send({embed: {"title": "Success", "color": 10196769,  "description": "This troublemaker has been warned."}})	
				}
		 member = null
		       break;
	 case "annoy":
		 member = message.mentions.members.first();
		 if (message.mentions.users.size === 0) {
			 message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "pls say something for annoy"}})  
		 } else {

			message.reply({embed: {"title": "LEL", "color": 10196769,  "description": "Are you ready for them to be ANNOYED?"}})   
		       member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
		 }
		 member = null
		 break;
		 case "annoynuke":
		 member = message.mentions.members.first();
		 if (message.mentions.users.size === 0) {
			 message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "pls say something for annoy"}})  
		 } else if (message.author.id === "258060857634848770"  || message.author.id === "272657620693811200" || message.author.id === "345330930120130571") {
			    			message.reply({embed: {"title": "LEL (Silent mode enabled)", "color": 10196769,  "description": "Are you ready for them to be ANNOYED?"}})   
		       member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
		 } else {

			message.reply({embed: {"title": "LEL", "color": 10196769,  "description": "Are you ready for them to be ANNOYED?"}})   
		       member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			  member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "Just in case..", "color": 12345678, "description": message.author.username + " bombed you."}})
		 }
		 member = null
		 break;
		 case "annoybomb":
		 member = message.mentions.members.first();
		 if (message.mentions.users.size === 0) {
			 message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "pls say something for annoy"}})  
		 } else {

			message.reply({embed: {"title": "LEL", "color": 10196769,  "description": "Are you ready for them to be ANNOYED?"}})   
		       member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			    member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			    member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}}) 
member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
			 member.send({embed: { "title": "LEL", "color": 12345678, "description": "toi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\ntoi toi toi toi\n"}})
		 }
		 member = null
		 break;
	 case "invite" :
		 
           message.reply({ embed: {"title": "Nice!", "description": "You requested an invite. [Go get 'em!](https://discordapp.com/oauth2/authorize?client_id=369094098499665921&scope=bot&permissions=2146958591)", "url": "Link: https://discordapp.com/oauth2/authorize?client_id=369094098499665921&scope=bot&permissions=2146958591", "color": 2614104} });
		 break;
	 case "idiot" :
		 ficmdobject = {
  "title": "Fresh Idiots",
  "description": "Well, good luck to the fresh idiot.",
  "url": "https://i.imgur.com/jscljlf.png",
  "color": 11298208,
  "timestamp": "2017-10-28T15:29:57.078Z",
  "image": {
    "url": "https://i.imgur.com/jscljlf.png"
  }
			 var member = message.mentions.members.first();
		 if (message.mentions.users.size === 0) {
			 message.reply({embed: {"title": "Wait, what!?", "color": 10196769,  "description": "Who is the fresh idiot?"}})   
} else {
			
	  var ficmdobject2 = message.reply({ embed : ficmdobject })
		 setTimeout(() => {
                   ficmdobject2.edit({embed: {"title": "The fresh idiot is", "color": 10196769,  "description": member.username + "!", "image": {"url": member.avatarURL}}})
              }, 5000)
}
var ficmdobject = null;
var ficmdobject2 = null;
var member = null
		 break;
}
});


client.login(process.env.BOT_TOKEN);

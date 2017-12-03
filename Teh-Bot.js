const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "hey v6, ";
var member = null
// Command list
var InformationCMDS = "help - Send help!\nhq - The HQ\ninvite - Invite me!\nping - What's the average heartbeat?\ninfo - 1v1 me bro.\nanswer - Serious Q&A.";
var ModerationCMDS = "warn - Sends a DM to the specified user with a message saying that they've been warned.";
var FunCMDS = "respond - I respond to anything you say.\n8ball - Q&A\nblah - Blah.\nfoo - Check this out. I can send messages!\nannoy - **Use with caution.**\nSome people do not like being annoyed, \nbut if you can do it, you can do it.\nannoybomb - A bigger annoyance.\nannoynuke - **DANGER!** USE THIS ONLY WITH PERMISSION OF THE PERSON YOU ARE ANNOYING\nIT COULD BE COUNTED AS HARRASMENT IF YOU DO NOT USE THIS WISELY\nyouregay - You're gay, you're gay, you're gay, you're gay.";
var versionIDName = ["HeyV6", "HelloV6", "YoV6", "TheV6", "BotV6", "EndOfTime", "NewBeginnings"]
var versionIDNumber = "1.0.0"
var SystemList = "Hey V6, introduce yourself | " + versionIDName[2]
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
  const teamCreate = message.content.toLowerCase();
  if (!teamCreate.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;
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
    case "introduce" :
		 message.channel.send({ embed: {"description": 'Hello!\nI am a bot that is awesome.\nNeed help? Say Hey V6, help me! And when you ask for help, remember to play with my commands.\n -V61020 as a bot', "color": 6496850}});
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
		 case "respond" :
         	var sayings = ["It is certain",
										"So you admit it!",
										"Hello",
										"You are a noob",
										"You are a duckface",
										"Say again?",
										"A duck says quack",
										"A noob says Twee!",
										"A cat says meow",
										"These responds are random, right?",
										"I should really stop replying to you.",
										"A cool kid says that he is better than everybody else.",
										"Why don't you go outside and play with friends?",
										"Yes",
										"No",
										"Maybe",
										"Bye",
										"Chat with your friends!",
										"Why are you chatting with me?",
										"Go play a game with friends!",
										"Go play a game"];

		 var result = Math.floor((Math.random() * sayings.length) + 0);
		 var ResultEmbed = {"title": "Response", "description": sayings[result], "color": 01301313};
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
  // Send the message to a designated channel on a server:
  const targetChannel = message.guild.channels.find('name', 'tixol-log');
  // Do nothing if the channel wasn't found on this server
  if (targetChannel) {
  targetChannel.send({embed: {"title": "Moderation Notification", "color": 13749278,  "description": "$(member) was warned by " + message.author.username}}) }
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
                           // Send the message to a designated channel on a server:
  const targetChannel = message.author.guild.channels.find('name', 'tixol-log');
  // Do nothing if the channel wasn't found on this server
  if (targetChannel) {
  targetChannel.send({embed: {"title": "Notification", "color": 13749278,  "description": member.username + " was annoynuked by " + message.author.username}}) }
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
	 case "youregay" :
		 member = message.mentions.members.first();
           if (message.mentions.users.size === 0) {
			 message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "Who IS gay?"}})  
		 } else {

			message.reply({embed: {"title": "Target accquired", "color": 10196769,  "description": "They're so gay."}})   
		       member.send({embed: { "title": "Well, I have bad news.", "color": 12345678, "description": "YOU'RE GAY, YOU'RE GAY, YOU'RE GAY, YOU'RE GAY, YOU'RE GAY YOU'RE SO GAY, YOU'RE GAY YOU'RE SO GAY, YOU'RE GAY, YOU'RE GAY, YOU'RE GAY, YOU'RE GAY"}}) 
		 }
		 member = null
		 break;
	 case "goodboy" :
		 	 member = message.mentions.members.first();
           if (message.mentions.users.size === 0) {
			 message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "Who's a little, little good boy, huh? NOBODY BECAUSE YOU DIDN'T SPECIFY ANYTHING"}})  
		 } else {

			message.reply({embed: {"title": "Handing down!", "color": 12345678,  "description": "What a little good boy!"}})   
		       message.channel.send("$(member)", {embed: { "title": "Good news!", "color": 23232323, "description": "You have earned the shrine of respect in " + message.guild.name + " due to being a good boy.", "fields": [{"name": "Grand master", "value": "ecert#5084", "inline": true}, {"name": "Given by", "value": message.author.name, "inline": true},{"name": "Person of Respect", "value":"$(member)", "inline": true }]}}) 
		 }
		 member = null
		 break;
		 case "kick" :
    member = message.mentions.members.first();
		 
		 if (!message.member.hasPermission("KICK_MEMBERS")) { message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to kick without the Kick Members permission!?"}})
								    } else if (message.mentions.users.size === 0) {
									message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to kick without mentioning ANYBODY!?"}})  
								    } else if (member.hasPermission("BAN_MEMBERS") || member.hasPermission("KICK_MEMBERS")) {
									    message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to kick a moderator!?"}})  
								    
								    } else {
  member.send({embed: {"title": "Warning", "color": 10196769,  "description": "You have been kicked out from " + message.guild.name + "."}})
message.channel.send({embed: {"title": "Success", "color": 10196769,  "description": "This troublemaker has been KICKED."}})	
			 member.kick()
  const targetChannel = message.guild.channels.find('name', 'tixol-log');
  // Do nothing if the channel wasn't found on this server
  if (targetChannel) {
  targetChannel.send({embed: {"title": "Moderation Notification", "color": 13749278,  "description": "" + member.username + " was kiced by " + message.author.username}})
  }
				}
		 member = null
		       break;
	case "ban" :
    member = message.mentions.members.first();
		 
		 if (!message.member.hasPermission("BAN_MEMBERS")) { message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to ban without the Kick Members permission!?"}})
								    } else if (message.mentions.users.size === 0) {
									message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to ban without mentioning ANYBODY!?"}})  
								    } else if (member.hasPermission("BAN_MEMBERS") || member.hasPermission("KICK_MEMBERS")) {
									    message.reply({embed: {"title": "Attention", "color": 10196769,  "description": "How dare you try to ban a moderator!?"}})  
								    
								    } else {
									      // Send the message to a designated channel on a server:
  const targetChannel = message.guild.channels.find('name', 'v6-log');
  // Do nothing if the channel wasn't found on this server
  if (targetChannel) {
  targetChannel.send({embed: {"title": "Moderation Notification", "color": 13749278,  "description": member.username + " was banned by " + message.author.username}})
  }
  member.send({embed: {"title": "Warning", "color": 10196769,  "description": "You have been banned in " + message.guild.name + "."}})
message.channel.send({embed: {"title": "Success", "color": 10196769,  "description": "I am swinging the banhammer on this troublemaker!"}})	
			 member.ban()
				}
		 member = null
		       break;

}
});
client.on('guildMemberAdd', joinedMember => {
  // Send the message to a designated channel on a server:
  const channel = joinedMember.guild.channels.find('name', 'tixol-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send({embed: {"title": "Player Joined", "color": 326483,  "description": "" + joinedMember.username + " has joined this server! Please welcome them."}})
});
client.on('guildMemberRemove', leftMember => {
  // Send the message to a designated channel on a server:
  const channel = leftMember.guild.channels.find('name', 'tixol-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send({embed: {"title": "Player Left", "color": 14923286,  "description": "" + leftMember.username + " has left this server.."}})
});


client.login(process.env.BOT_TOKEN);

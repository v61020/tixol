
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
      const ManagerThing = {
  "title": "Bot Manager",
  "description": "Bot manager details are shown below",
  "color": 4343865,
  "timestamp": "2017-10-15T12:34:59.432Z",
  "footer": {
    "icon_url": "https://i.imgur.com/FRlY1uj.png",
    "text": "Manager Test Ran"
  },
  "thumbnail": {
    "url": "https://i.imgur.com/FRlY1uj.png"
  },
  "image": {
    "url": "https://i.imgur.com/FRlY1uj.png"
  },
  "author": {
    "name": "Tixol Manager",
    "url": "https://discordapp.com",
    "icon_url": "https://i.imgur.com/FRlY1uj.png"
  },
  "fields": [
    {
      "name": "Bot Name",
      "value": "Tixol",
      "inline": true
    },
    {
      "name": "Bot Description",
      "value": "One pixel can mean so much more.",
      "inline": true
    },
    {
      "name": "Bot Creators",
      "value": "V61020#5084, muhammed51#3243, DexoroYT#7100",
      "inline": true
    },
    {
      "name": "Shards",
      "value": client.shard.id + "/7",
      "inline": true
    },
    {
      "name": "Servers on Shard",
      "value": client.guilds + "/2500",
      "inline": true
    }
  ]
};

client.on("ready", () => {
  console.log("I am ready!");
  const ManagerThing =       const ManagerThing = {
  "title": "Bot Manager",
  "description": "Bot manager details are shown below",
  "color": 4343865,
  "timestamp": "2017-10-15T12:34:59.432Z",
  "footer": {
    "icon_url": "https://i.imgur.com/FRlY1uj.png",
    "text": "Manager Test Ran"
  },
  "thumbnail": {
    "url": "https://i.imgur.com/FRlY1uj.png"
  },
  "image": {
    "url": "https://i.imgur.com/FRlY1uj.png"
  },
  "author": {
    "name": "Tixol Manager",
    "url": "https://discordapp.com",
    "icon_url": "https://i.imgur.com/FRlY1uj.png"
  },
  "fields": [
    {
      "name": "Bot Name",
      "value": "Tixol",
      "inline": true
    },
    {
      "name": "Bot Description",
      "value": "One pixel can mean so much more.",
      "inline": true
    },
    {
      "name": "Bot Creators",
      "value": "V61020#5084, muhammed51#3243, DexoroYT#7100",
      "inline": true
    },
    {
      "name": "Shards",
      "value": client.shard.id + "/7",
      "inline": true
    },
    {
      "name": "Servers on Shard",
      "value": client.guilds + "/2500",
      "inline": true
    }
  ]
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
    member.send("Meow!").catch(message.channel.send("Completed!"))
    break;
  case "shard" :
    message.channel.send("The bot is on shard " + client.shard.id)
    break;
   case "manager" :
  message.reply({ ManagerThing })    
      
     break;
}
});

client.login(process.env.BOT_TOKEN);

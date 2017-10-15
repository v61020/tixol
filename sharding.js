/*
    The following code goes into it's own file, and you run this file 
    instead of your main bot file.
*/

const Discord = require('discord.js'); 
const Manager = new Discord.ShardingManager('./Teh-Bot.js');
Manager.spawn(7); // This example will spawn 7 shards (17,500 guilds);

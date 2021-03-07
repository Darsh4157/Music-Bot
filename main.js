const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./command/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./command/${file}`);

  client.commands.set(command.name, command);
}
client.once('ready', () => {
  console.log('Music Bot is online!');  
});
   client.on('message' , message =>{
 if (!message.content.startsWith(prefix) || message.author.bot) return;

 const args = message.content.slice(prefix.length).split(/ + /);
 const command =args.shift().toLowerCase();

 if(command === 'ping'){
    client.commands.get('ping').execute(message,args);  
 } else if (command === 'youtube'){
   message.channel.send('https://www.youtube.com/MatthewPatrick13');
 }
});

client.login('process.env.token');
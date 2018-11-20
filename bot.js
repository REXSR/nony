const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("muuuuuuuuute,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("498525587808190505");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Ꮃelcome Ꭲo Ꮪerver Power**`), 2000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "495002982593855489" && ch.type === 'voice').join();

});




client.login(process.env.BOT_TOKEN);

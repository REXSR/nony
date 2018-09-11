const Discord = require('discord.js');

const client = new Discord.Client();

const perfix = "+"

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("streming")

});

 const res = JSON.parse(fs.readFileSync('./responses.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setMsg")) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    
    if(!messageArray[1]) return message.channel.send('Supply a message!').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    if(!messageArray[2]) return message.channel.send('Suplly a response!').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    message.reply('Preparing...').then(msg => {
        setTimeout(() => {
           msg.edit(':white_check_mark: Done!.'); 
        },5000);
    });
    res[message.guild.id] = {
        msg: messageArray[1],
        response: messageArray[2],
    };
    fs.writeFile("./responses.json", JSON.stringify(res), (err) => {
    if (err) console.error(err);
  });
   } 
});

client.on('message', async message => {
   if(message.content === res[message.guild.id].msg) {
       message.channel.send(res[message.guild.id].response);
   }
}); 
    



      
 
   









client.login(process.env.BOT_TOKEN); 

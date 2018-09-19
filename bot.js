const Discord = require('discord.js');

const client = new Discord.Client();

const perfix = "+"

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")

});

 
    
    
client.on('message', message => {
                    var prefix = "+";

           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  
const fs = require('fs');
const res = JSON.parse(fs.readFileSync('./responses.json' , 'utf8'));
client.on('message', async message => {

    let messageArray = message.content.split(" ");

   if(message.content.startsWith(prefix + "set")) {

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



client.on('message',async message => {

  let messageArray = message.content.split(' ');

  let mention = message.mentions.users.first();

  if(message.content.startsWith(prefix + 'transfer')) {

    if(!mention) return message.channel.send('منشن شخص');

    if(isNaN(messageArray[2])) return message.channel.send('هذه الخانة يجب ان تكون رقم وليس احرف');

    credits[mention.id].credits += (+messageArray[2]);

    credits[message.author.id].credits += (-messageArray[2]);

    fs.writeFile('./transfer' ,JSON.stringify(credits), (err) => {

      if(err) console.error(err);

    });

    message.channel.send(**💰 | ${message.author.username}, has transfered ${messageArray[2]}$ to ${mention}**)

  }

}); 


client.on('message', message => {

    if (message.content.startsWith("bot")) {

      message.channel.send({

 embed: new Discord.RichEmbed() 

    .setColor('RED')

    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)

         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')

        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)

        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)

     })

    }

  });

  function timeCon(time) {

    let days = Math.floor(time % 31536000 / 86400)

    let hours = Math.floor(time % 31536000 % 86400 / 3600)

    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)

    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)

    days = days > 9 ? days : '0' + days

    hours = hours > 9 ? hours : '0' + hours

    minutes = minutes > 9 ? minutes : '0' + minutes

    seconds = seconds > 9 ? seconds : '0' + seconds

    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`

};
      
 
 
 



    



      
 
   









client.login(process.env.BOT_TOKEN); 

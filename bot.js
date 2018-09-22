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
  

  client.on('message', message => {

  if(message.content === '+inv') {

  const embed = new Discord.RichEmbed()

  .setTitle('اضعط هنا')

  .setURL('https://discordapp.com/oauth2/authorize?client_id=488456783531343872&scope=bot&permissions=1')

  .setColor('RANDOM')

  message.channel.send({embed: embed});

  }

});   
    
    
  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  
 
 client.on('message', message => {
      const embed = new Discord.RichEmbed();
    if (message.content.startsWith("+server")) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      let region = {
          "brazil": "Brazil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "us-central": "U.S. Central",
          "sydney": "Sydney",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe",
          "vip-us-east": "VIP U.S. East",
          "london": "London",
          "amsterdam": "Amsterdam",
          "hongkong": "Hong Kong"
      };
 
      var emojis;
      if (message.guild.emojis.size === 0) {
          emojis = 'None';
      } else {
          emojis = message.channel.guild.emojis.map(e => e).join(" ");
      }
  embed.setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
  .setThumbnail(message.guild.iconURL ? message.guild.iconURL : me.user.displayAvatarURL)
  .addField("• Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
  .addField("• ID", message.guild.id, true)
  .addField("• Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("• Region", region[message.guild.region], true)
  .addField("• Members", message.guild.memberCount, true)
  .addField("• Roles", message.guild.roles.size, true)
  .addField("• Channels", message.guild.channels.size, true)
  .addField("• Emojis", emojis, true)
  .addField("• Verification Level", verifLevels[message.guild.verificationLevel], true)
  .addField("• Default Channel", message.guild.defaultChannel, true)
  .setColor(3447003)
  message.channel.send({embed});
  }
});
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
    };




client.on('message', message =>{
    if(message.content === '+ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});
 



 let logs = JSON.parse(fs.readFileSync(`./logs.json`, `utf8`)); // BY ! - NourEldien.#8007
client.on('message', message => {
  if(!logs[message.guild.id]) logs[message.guild.id] = {
  onoff: 'Off',
  channel: 'logs' // BY ! - NourEldien.#8007
  };
  if(logs[message.guild.id].onoff === 'Off') return;
  let logchannel = message.guild.channels.find("name", logs[message.guild.id].channel)
 
});
client.on('message', message => {
  client.on("roleCreate", rc => {
    const channel = rc.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(rc.guild.name) // BY ! - NourEldien.#8007
    .setDescription(`***Created Role Name : *** **${rc.name}** `)
    .setColor(`RANDOM`)
    .setTimestamp(); // BY ! - NourEldien.#8007
    channel.sendEmbed(embed)
    }
    });
    //By S Codes
    client.on("roleDelete",  rd => {
    const channel = rd.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(rd.guild.name)
    .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
    .setColor(`RANDOM`)
    .setTimestamp(); // BY ! - NourEldien.#8007
    channel.sendEmbed(embed)
    }
    });
    // BY ! - NourEldien.#8007
  client.on("channelCreate",  cc => {
    const channel = cc.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(cc.guild.name)
    .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)
    .setColor(`RANDOM`)
    .setTimestamp();
    channel.sendEmbed(embed)
    } // BY ! - NourEldien.#8007
    });
   
     client.on("deleteChannel",  dc => {
    const channel = dc.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(dc.guild.name)
    .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
    .setColor(`RANDOM`)
    .setTimestamp();
    channel.sendEmbed(embed)
    } // BY ! - NourEldien.#8007
    });
   
   
   
    client.on('messageUpdate', (message, newMessage) => {
      if (message.content === newMessage.content) return;
      if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
      const channel = message.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
   
      let embed = new Discord.RichEmbed()
         .setAuthor(`${message.author.tag}`, message.author.avatarURL)
         .setColor('SILVER')
         .setDescription(`✏ **تعديل رساله
  ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
         .setTimestamp();
       channel.send({embed:embed});
   
    // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007
  });
   
  client.on('guildMemberAdd', member => {
      if (!member || !member.id || !member.guild) return;
      const guild = member.guild;
     
      const channel = member.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
      let memberavatar = member.user.avatarURL
      const fromNow = moment(member.user.createdTimestamp).fromNow();
      const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
     
      let embed = new Discord.RichEmbed()
         .setAuthor(`${member.user.tag}`, member.user.avatarURL)
         .setThumbnail(memberavatar)
         .setColor('GREEN')
         .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
         .setTimestamp();
       channel.send({embed:embed});
  });
   
  client.on('guildMemberRemove', member => {
      if (!member || !member.id || !member.guild) return;
      const guild = member.guild;
     
      const channel = member.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
      let memberavatar = member.user.avatarURL
      const fromNow = moment(member.joinedTimestamp).fromNow();
     
      let embed = new Discord.RichEmbed()
         .setAuthor(`${member.user.tag}`, member.user.avatarURL)
         .setThumbnail(memberavatar)
         .setColor('RED')
         .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
         .setTimestamp();
       channel.send({embed:embed});
  });
   
  client.on('messageDelete', message => {
      if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
      const channel = message.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
     
      let embed = new Discord.RichEmbed()
         .setAuthor(`${message.author.tag}`, message.author.avatarURL)
         .setColor('BLACK')
         .setDescription(`🗑️ **حذف رساله**
  **ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
         .setTimestamp();
       channel.send({embed:embed});
   
  });
})
client.on('message', message => {
 
 
if(!message.guild) return; // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007
  if(!logs[message.guild.id]) logs[message.guild.id] = {
  onoff: 'Off',
  channel: 'logs'
  };
 
if(message.content.startsWith(prefix + 'setlogs')) {
         
  let perm = message.member.hasPermission(`ADMINISTRATOR`) || message.member.hasPermission(`MANAGE_SERVER`)
 
  if(!perm) return message.reply(`You don't have \`Manage_roles / Administrator\` Permission`);
  let args = message.content.split(" ").slice(1);
  if(!args.join(" ")) return message.reply(`:gear: **| Correct usage**:
\`=setlogs toggle / set <channel name>\``);
  let state = args[0];
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
 // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007
  if(!state.trim().toLowerCase() == 'toggle') return message.reply(`Please type a right state ON / OFF`) ;
    if(state.trim().toLowerCase() == 'toggle') {
     if(logs[message.guild.id].onoff === 'Off') return [message.channel.send(`:white_check_mark: **| Logs for this server has been turned on.**`), logs[message.guild.id].onoff = 'On'];
     if(logs[message.guild.id].onoff === 'On') return [message.channel.send(`:white_check_mark: **| Logs for this server has been turned off.**`), logs[message.guild.id].onoff = 'Off'];
    }
 
   if(state.trim().toLowerCase() == 'set') {
   let newChannel = message.content.split(" ").slice(2).join(" ");
   if(!newChannel) return message.reply(`:gear: **| To set the logging channel use**:
\`=setlogs set <channel name>\``);
     if(!message.guild.channels.find(`name`,newChannel)) return message.reply(`:mag_right: **| I can't find this channel.**`);
    logs[message.guild.id].role = newChannel;
     message.channel.send(`:shield: **| Logging channel has been changed to**:
\`${newChannel}\``);
   }
         }
    fs.writeFile("./logs.json", JSON.stringify(logs), (err) => {
    if (err) console.error(err);
  });
});    
    
    
    
   
  









 
  
  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
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
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  
 
  
   
client.on("message", message => {
 if (message.content === "colors") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
تفضل يقلبي 
      `)
   message.channel.sendEmbed(embed)
   message.channel.send('https://cdn.pg.sa/oZAC7d5OPO.png');
    }
   });


client.on('ready', async => {
  console.log(`${client.user.username} is Now Online!`);
})

client.on("guildCreate", guild => {
    let embed = new Discord.RichEmbed ()
    .setTitle('I Joined A Server!')
    .addField(`** :tada: ${client.user.username} Has Joined : **`,`${guild.name}`)
    .addField(`** :crown: Owned By : **`,`${guild.owner.user.username}`)
    .setFooter(`${client.user.username}`)
    .setTimestamp()
    .setColor("RANDOM") 
    client.channels.get("492979647995183104")
    .send(embed)
  });

  client.on("guildDelete", guild => {
  let embed = new Discord.RichEmbed ()
  .setTitle('I left A Server!')
  .addField(`** :cry: ${client.user.username} Has Left : **`,`${guild.name}`)
  .addField(`** :crown: Owned By : **`,`${guild.owner.user.tag}`)
  .setFooter(`${client.user.username}`)
  .setTimestamp()
  .setColor("RANDOM") 
  client.channels.get("492979779780476930")
  .send(embed)
});
    

   












  



  
    
      
 
 
 



    



      
 
   









client.login(process.env.BOT_TOKEN); 

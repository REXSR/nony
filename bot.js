const Discord = require('discord.js');

const client = new Discord.Client();

const perfix = "+"

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("streming")

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






client.on("message", message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "points") {
      return message.reply(`You currently have ${score.points} points and are level ${score.level}!`);
    }
   
    if(command === "give") {
      if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");
      const user = message.mentions.users.first() || client.users.get(args[0]);
      if(!user) return message.reply("You must mention someone or give their ID!");
      const pointsToAdd = parseInt(args[1], 10);
      if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...");
          let userscore = client.getScore.get(user.id, message.guild.id);      
      if (!userscore) {
        userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 };
      }
      userscore.points += pointsToAdd;
      let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
      userscore.level = userLevel;
      client.setScore.run(userscore);
   
      return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
    }
   
    if(command === "top text") {
      const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);
      const embed = new Discord.RichEmbed()
        .setTitle("**TOP 10 TEXT** :speech_balloon:")
        .setAuthor('📋 Guild Score Leaderboards', message.guild.iconURL)
        .setColor(0x00AE86);
 
      for(const data of top10) {
        embed.addField(client.users.get(data.user).tag, `XP: \`${data.points}\` | LVL: \`${data.level}\``);
      }
      return message.channel.send({embed});
    }
   
  });
 

const client = new Discord.Client({disableEveryone: true});
const Canvas = require('canvas') // بكج
const fs = module.require("fs"); //بكج
const r1 = require('snekfetch'); //بكج
 
 
//var يعني تختصر للحاجه زي منا عامل كدة 
 
var mo = "الفلوس"
var po = "النقاط"
var lev = "الفل"
 
 
client.on("ready", async () => { // كل حاجه هتتفح لما البوت يشتغل
 
    console.log(`I'm Online \n By ${copy}`) // الي هيظهر في الكونسل
    console.log(`Logged in as ${bot.user.tag}!`); // نفس الي فوق
 
    client.user.setGame(`${bot.users.size} users `,"http://twitch.tv/") // الي هيظهر في بلاينق
    client.user.setStatus("Streming") // حاله البوت (اونلاين
 
}); // نهايه الكود
 
 
 
client.on('message', message => {
 
if (message.content.startsWith("+profile")) { // الامر
 let canvas = new Canvas(300, 300) //حجم الصوره الي هتظهر
 let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
   
   
                      //  ava.src = buf;
 
    fs.readFile(__dirname + '/images_profile/profile.png', function(err, picture) { //مكان الصوره
      if (err) throw err
      var img = new Image
                var url = message.author.avatarURL; //افتار صورتك
        url = url.substring(0, url.indexOf('?'));
 
        r1.get(url).then(res => {
            var dataURL = res.body.toString('base64');
            dataURL = 'data:image/png;base64,' + dataURL;
            img.onload = function() {
 
                ctx.save();
            ctx.beginPath();
            ctx.arc(54, 103, 47, 0, Math.PI * 2, true); // احدثيات الدائره
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, 8, 57, 92, 92); // الصوره
            ctx.restore();
            }
            img.src = dataURL;
        });
       
      img.onload = () => {
        ctx.drawImage(img, 1, 1, 300, 300)
     //   ctx.drawImage(message.author.avatarURL, 152, 27, 95, 95);
        ctx.font = "regular 11px Cairo" // نوع الخط وحجمه
        ctx.fillStyle = "#9f9f9f" // لون الخط
        ctx.fillText(`${message.author.username}`, 140, 137)
        ctx.fillText(`${mo}  `, 143, 219) //money
        ctx.fillText(`${po}`, 120, 202) // النقاط
 
        //Level
        ctx.font = "regular 21px Cairo"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${lev}`, 47, 255) //لفل
 
        ctx.save()
       
      }
      img.src = picture
           
    })
       
   
 
   
 
    setTimeout(function() {
      fs.readFile(__dirname + '/images_profile/diamond_prof_bg.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
      fs.writeFile(`image.png`, buf)
     
        message.channel.send("", {
          file: `image.png`
        })
      })
    }, 1000)
 
 
    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
 
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
 
      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;
 
      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
 
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }
 
        test = line + words[i] + ' ';
        metrics = context.measureText(test);
 
        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
 
      ctx.fillText(line, x, y);
    }
 
 
 
 
};
 
 
 
 
});


 

    



      
 
   









client.login(process.env.BOT_TOKEN); 

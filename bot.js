const Discord = require('discord.js');
const prefix = "-"
const fs = require('fs');
const ms = require('ms');
const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log(`[Start] ${new Date()}`);

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(`Logged in as * [ " ${client.user.username} " ]`);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        };
    if (message.content.startsWith(prefix + 'فكك')) {
        if(!message.channel.guild) return
     
    const type = require('./fkkk.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
     
                 
    msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                    .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
    لمعرفة نقطاك الرجاء كتابة -نقاطي**`);
            console.log(`[Typing] ${collected.first().author} typed the word.`);
                let userData = points[message.author.id];
                userData.points++;
                        })
                        .catch(collected => {
                            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                console.log('[Typing] Error: No one type the word.');
                        })
            })
        })
    }
    });
	
	
	
	
	
	
	
	
	
	
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./Points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});

    














client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";
const fs = require('fs');
const points = require('points');
console.log("BOT ONLINE.");
 


      



client.on('message', message => {

    if (!points[message.author.id]) points[message.author.id] = {

        points: 0,

        };

    if (message.content.startsWith(prefix + 'لغز')) {

        if(!message.channel.guild) return

     

    const type = require('quiz.json');

    const item = type[Math.floor(Math.random() * type.length)];

    const filter = response => {

            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());

    };

    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {

     

                 

    msg.channel.send(`${item.type}`).then(() => {

                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })

                    .then((collected) => {

            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه

    لمعرفة نقطاك الرجاء كتابة .نقاطي**`);

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
    if (!points[message.author.id]) points[message.author.id] = {
        points: 0,
        };
    if (message.content.startsWith(prefix + 'فكك')) {
        if(!message.channel.guild) return
     
    const type = require('fkkk.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
     
                 
    msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                    .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
    لمعرفة نقطاك الرجاء كتابة +نقاطي**`);
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
    if(!message.channel.guild) return
    let userData = points[message.author.id];
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setColor('#000000')
    .setDescription(`نقاطك: \`${userData.points}\``)
    message.channel.sendEmbed(embed)
  }
  fs.writeFile("3wasmPTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});
 






client.login(process.env.BOT_TOKEN)

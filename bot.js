const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
console.log("BOT ONLINE");
 


      



client.on('message', message => {

    if (!points[message.author.id]) points[message.author.id] = {

        points: 0,

        };

    if (message.content.startsWith(prefix + 'لغز')) {

        if(!message.channel.guild) return

     

    const type = require('./fkk/quiz.json');

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










client.login(process.env.BOT_TOKEN)

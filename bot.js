const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('!help !inv', { type: 'WATCHING' })
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل 24 ساعه 
**
        ***__General orders__***
**
『!allbots/لعرض جميع البوتات الي بالسيرفر』
『!server/يعرض لك معلومات عن السيرفر』
『!bot/يعرض لك كل معلومات البوت』
『!count/يعرض لك عدد الاشخاص بالسيرفر بدون بوتات』
『!invites/ يعرض لك  عدد انفايتاتك بالسيرفر 』
『!invite-codes/يعرض لك روابط الانفايتات حكك في السيرفر 』
『!perms/يعرض لك برمشناتك بالسيرفر』
『!rooms/يعرض لك كل الرومات الي بالسيرفر مع عددها』
『!roles/يعرض لك كل الرانكات بالسيرفر بشكل جميل』
『!members/��عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『!id/معلومات عنك』
『!profile/عرض بروفايل حقك』
『!voice /  يوم لك بكتابه مجموع عدد الاشخاص الموجودين برومات』
『!avatar/صورتك او صورة الي تمنشنو』
『!discrim/كود يضهر لك الاشخاص نفس تاقك』
『!inv/لدعوة البوت الى سيرفرك』
『!support/سيرفر الدعم』
『!contact/ارسال اقتراح او لمراسلة صاحب البوت』
**
  `
,`
        ***__Administrative Orders__***
**
『!move @user /  لسحب الشخص الى روومك』
『!voiceonline /  لتفعيل خاصيه فويس اونلاين يسحب عدد الاشخاص موجودين برومات』
『!bc / رسالة جماعية الى كل اعضاء السيرفر』
『!role @user <rank> / لأعطاء رتبة لعضو معين』
『!roleremove @user <rank> / لازالة الرتبة من شخص معين』
『!role all <rank> / لأعطاء رتبة للجميع』
『!role humans <rank> / لأعطاء رتبة للاشخاص فقط』
『!role bots <rank> / لأعطاء رتبة لجميع البوتات』
『!clear / مسح الشات』
『!mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
『!unmute @user / لفك الميوت عن الشخص 』
『!kick @user <reason> / طرد الشخص من السيرفر』
『!ban @user <reason> / حضر الشخص من السيرفر』
『!mutechannel / تقفيل الشات』
『!unmutechannel / فتح الشات』
『❖!set colors <number> / ينشا لك الوان مع كم الوان تبي』
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 

client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});


















client.login(process.env.BOT_TOKEN);

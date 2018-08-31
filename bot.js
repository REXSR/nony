const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
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
});





var dat = JSON.parse("{}");

function forEachObject(obj, func) {

    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })

}

client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.find("name", "bc Support")

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        })

    })

})

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.find('name', 'chat');

    if (!channel) {

        console.log("i have Error !!");

        return;

    }

			 	         var currentTime = new Date(),		  hours = currentTime.getHours() + 4 ,

          hours2 = currentTime.getHours() + 1 ,             

		   minutes = currentTime.getMinutes(),             

		   seconds = currentTime.getSeconds(),

            Year = currentTime.getFullYear(),

            Month = currentTime.getMonth() + 1,

            Day = currentTime.getDate();

             if(hours2 > 12) {

               hours2 -= 12;

            } else if(hours2 == 0) {

                hours2 = "12";

            

            }  

            var suffix = 'AM';

            if (hours >= 12) {

                suffix = 'PM';

                hours = hours - 12;	

            }

            if (hours == 0) {

                hours = 12;

            }

         var ee = member.user;

		     var guild;

    while (!guild)

        guild = client.guilds.find("name", "bc Support")

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

                    console.log(3);

                    console.log(`${member} joined ${Invite.inviter}'s invite ${Invite.code}`)

ee.send(`We Thank ${Invite.inviter}\nFor he has brought you into the server \nYou are logged in from this link https://discord.gg/${Invite.code}`);

 channel.send({embed : new Discord.RichEmbed()

       .setColor('RANDOM')

       .setThumbnail(ee.avatarURL)

       .setTitle(`**New Member !! **`)	

       .setDescription(`1- Invited By : ${Invite.inviter} \n2- Link Invited : https://discord.gg/${Invite.code} \n3- Member Name : ${member} \n4- Member ID : ${member.id} \n5- Data : ${Day}-${Month}-${Year} \n6- Time : ${hours2}:${minutes}:${seconds} ${suffix}`)

	   });

            dat[Inv] = Invite.uses;

 }

         })

    })

	});













client.login(process.env.BOT_TOKEN);

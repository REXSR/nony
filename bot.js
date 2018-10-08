const Discord = require('discord.js');
const perfix ='#'
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[NAWAF] ${client.users.size}`)
    client.user.setStatus("online")
});



const Eris = require("eris");
var client_id = "498561323848695828";

                    var i = "0";

                    var x = "0";

client.on("voiceChannelJoin", (msg) => {

    x++;

    client.editChannel(client_id, { name : "onpower ⇏「" + x + "」"});

});

client.on("voiceChannelLeave", (msg) => {

    x--;

    client.editChannel(client_id, { name : "onpower ⇏「" + x + "」"});

});

client.on("messageCreate", (msg) => {

    if(msg.author.id !== "283355378811666435") return client.createMessage('__**This Command is only for the bot Owner**__');

    if(msg.content === "#voice") {

        let users = msg.channel.guild.members.map(m => m.user.id);

        let messages = [];

        messages.push(users);

        setTimeout(function(){

        while (i <= messages[0].length - 1) {

            check = msg.channel.guild.members.get(messages[0][i]);

        if(!check.voiceState.channelID){

                i++;

        }else{

                x++;

                i++;

        }

}

    console.log(x);

    client.createMessage(msg.channel.id, "onpower Online Members Now Are: **"+x+"** Members!");

    client.editChannel(client_id, { name : "onpower ⇏「"+x+"」"});

    messages = [];

}, 1);

    }

});
















client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const perfix ='#'
const bb = new Discord.Client();



const Eris = require("eris");
var bb = new Eris("NDkzNTI2ODQ2NDAzNTEwMjcy.Dp0eYw.RvfFz9wmxCREnJOaR8EYau885os");
var bb_id = "498561323848695828";

                    var i = "0";

                    var x = "0";

bb.on("voiceChannelJoin", (msg) => {

    x++;

    bb.editChannel(bb_id, { name : "onpower ⇏「" + x + "」"});

});

bb.on("voiceChannelLeave", (msg) => {

    x--;

    bb.editChannel(bb_id, { name : "onpower ⇏「" + x + "」"});

});

bb.on("messageCreate", (msg) => {

    if(msg.author.id !== "283355378811666435") return bb.createMessage('__**This Command is only for the bot Owner**__');

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

    bb.createMessage(msg.channel.id, "onpower Online Members Now Are: **"+x+"** Members!");

    bb.editChannel(bb, { name : "onpower ⇏「"+x+"」"});

    messages = [];

}, 1);

    }

});
















bb.login(process.env.BOT_TOKEN);

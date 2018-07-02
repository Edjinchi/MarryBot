const Discord = require('discord.js')
const bot = new Discord.Client()



bot.on('message', function (message) {

    if (message.author.bot) return null;{
    }
    if (message.content === 'Bonjour'){
        message.channel.send ('Bonjour! Je suis *MarryBot* ! :heart:')
    }
    if (message.content === '442420638188306434'){
            message.channel.send ('Bonjour! Je suis *MarryBot* ! :heart:')
    }
    if (message.content === 'No u'){
        message.reply ('Ur mom gay.')
    }
    if (message.content === 'NO U'){
        message.reply ('Ur mom gay.')
    }
    /*if (("a"+ message.content+ "a") .split("422942674870468612")[1]){
        message.delete();
        console.log("Emote pourrie détéctée")
        message.author.send('kek')
    } */

    if (("a"+ message.content+ "a") .split("Saeru")[1]){
        message.channel.send ('Nous devons faire disparaitre la team Saeru.')
    }
    if (("a"+ message.content+ "a") .split("saeru")[1]){
        message.channel.send ('Nous devons faire disparaitre la team Saeru.')
    }
})

bot.login('NDQyNDIwNjM4MTg4MzA2NDM0.Dc-t7w.up9wlV8Y5FBlN3NcLFA3DwvflXo')

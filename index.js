const Discord = require('discord.js')
const {Client, Attachment} = require('discord.js');
const bot  = new Discord.Client();

const token = 'NjQwMjA0OTY4NTczNTM0MjE5.Xb2bXw.oopU3ThBCS8hFxBtyZ7GkW27kE8';

const PREFIX = 'manero ';

client.login(preocess.env.token);

const ytdl = require("ytdl-core");

var servers = {};

bot.on('ready', ()=>{
    console.log('This bot is online!');
    bot.user.setActivity('so manero kkk',  {type: 'LISTENING'}).catch(console.error);
})

bot.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.find(channel => channel.name === "bem-vindx");
    if(!channel) return;
    const bv = new Discord.RichEmbed()
            .setTitle('BEM-VINDO(A) AO DISCORD MANERO')
            .addField('Novo membro:', member)
            .addField('Regras:', 'qq é isso kkkk')
            channel.sendEmbed(bv);
});

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'votacao':
            const vt = new Discord.RichEmbed()
            .setTitle('Iniciar Votação')
            .setDescription("Votação de sim ou não");

            if(!args[1]){
                msg.channel.send(vt);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            msg.channel.send("📋 "+"**"+ msgArgs + "**").then(msgReaction => {
                msgReaction.react("👍");
                msgReaction.react("👎");
                msg.delete(2000).catch(console.error);
            })
        case 'sama':
            if(!msg.member.roles.find(r => r.name === "Muzan" || "Oyakata-sama" || "Upper Moons" ))
            return msg.channel.send('quem é vc ? kkkkk')
            msg.channel.sendMessage('nois é foda kkkk')
            msg.react('😎');
            break;
        case 'selfie':
            const attachment = new Attachment('https://images-na.ssl-images-amazon.com/images/I/71lTI4jsOnL._SX466_.jpg')
            msg.channel.send(msg.author, attachment);
            msg.react('😎');
            break;
        case 'o':
            const attachment2 = new Attachment('https://66.media.tumblr.com/8b022b20c5dda80dbea3e23b3bd7c61c/tumblr_inline_pro1vk6FOw1rd8o7r_400.png')
            msg.channel.send(msg.author, attachment2);
            msg.react('😎');
            break;
        case 'cat':
            const attachment3 = new Attachment('https://i.kym-cdn.com/entries/icons/original/000/030/157/womanyellingcat.jpg')
            msg.channel.send(attachment3)
            msg.react('😎');
            break;
        case 'otaku':
            msg.channel.sendMessage('fedido');
            msg.react('😎');
            break;
        case 'rode':
            msg.channel.sendMessage('o rode é foda');
            msg.react('😎');
            break;
        case 'clear':
            if(!args[1]) return msg.reply('Erro, sem argumentos suficientes')
            msg.channel.bulkDelete(args[1]);
            break;
        case 'vadia':
            msg.channel.sendMessage('puta');
            msg.react('😎');
            break;
        case 'puta':
            msg.channel.sendMessage('vadia');
            msg.react('😎');
            break;
        case 'penis':
            msg.channel.sendMessage('pirocakkk');
            msg.react('😎');
            break;
        case 'piroca':
            msg.channel.sendMessage('peniskk');
            msg.react('😎');
            break;
        case 'burro':
            msg.channel.sendMessage('é vc vadia puta');
            msg.react('😎');
            break;
        case 'fome':
            msg.channel.sendMessage('comia fodase')
            msg.react('😎');
            break;
        case 'info':
            const embed = new Discord.RichEmbed()
            .setTitle('Informações do otaku')
            .addField('IGN:', msg.author.username)
            .addField('Servidor', msg.guild.name)
            msg.channel.sendEmbed(embed);
            msg.react('😎');
            break;
    }

    
})

bot.login(token);

const discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const client = new discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})
const prefix = '.';


const welcome = require('./commands/welcome');

welcome(client)

//bot activity
const activities_list = [
    "WELCOME ALL",
    "kmpgc.mc-srv.com",
    "⚡KMPGC.WORLD⚡",
    "🏹KMPGC RP COMING SOON",
    "😎PURE SURVIVAL",
    "📋PLEASE REPORT ADMINS",
    "🎃WELCOME KMPGC SRV"
    ];

    client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
            client.user.setActivity(activities_list[index],{ type: 'WATCHING' });
        }, 5000);
      });

client.commands = new discord.Collection();
client.events = new discord.Collection();
client.owners = ["754209204549714012"];

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, discord);
})

               if (message.content.startsWith(prefix + "d")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
                           var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
              m.send(`${argresult}\n ${m}`);
 
})


                          if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark:   |   Successfully Sent the Message to all Server Members.")
                                    
                                    .setColor("#00ff33")
                                    .setTitle ('Message Has been Sent.')
									                  .setFooter ("KMPGC BOT")
                                    .setImage('http://bit.ly/36Ske5f');
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {
                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | Message has been Successfully Sent to @everyone xD')
                                                                .setColor("#99999")
                                                                .setFooter ("KMPGC BOT")
                                                                .setTitle ('Message Has been Sent.')
                                                                
                               
                                                                message.channel.sendEmbed(embed4);
                                                                message.delete();
                            }
                          }
						

client.on("message", (message) => {
    if (message.content.startsWith(`.ann`)) {
      var text = message.content.split(' ').slice(1).join(' ');
      if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
      message.delete();
      const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(
            "KMPGC",
            "https://cdn.discordapp.com/emojis/786568294559645696.gif?v=1"
          )
    .setTitle('ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ')
    .setDescription(text)
    .setThumbnail('https://cdn.discordapp.com/attachments/780663000997822464/847292333288194100/logo3.png')
    .setImage('https://media.discordapp.net/attachments/786193887978979438/786386654650433586/13-26-52-nitro_1.gif')   
    .setFooter('KMPGC BOT')
    .setTimestamp()
      message.channel.send(embed);
      message.channel.stopTyping()
     }
    });

client.on("message", (message) => {
      if (message.content.startsWith(`.b`)) {
        var text = message.content.split(' ').slice(1).join(' ');
        if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
        message.delete();
        const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
              "KMPGC",
              "https://cdn.discordapp.com/attachments/810812254936498176/841957312969048064/811885160042594346.gif"
            )
      .setTitle('SERVER BAN')
      .setDescription(text)
      .setThumbnail('https://cdn.discordapp.com/attachments/811275118424621107/841956380884598794/tenor.gif')
      .setImage('https://cdn.discordapp.com/attachments/811275118424621107/841956504705171456/the_kmpgc.gif')   
      .setFooter('KMPGC BOT')
      .setTimestamp()
        message.channel.send(embed);
        message.channel.stopTyping()
       }
      });

      client.on("message", (message) => {
        if (message.content.startsWith(`.wlp`)) {
          var text = message.content.split(' ').slice(1).join(' ');
          if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
          message.delete();
          const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(
                "KMPGC",
                "https://cdn.discordapp.com/attachments/810812254936498176/841957312969048064/811885160042594346.gif"
              )
        .setTitle('WHITELIST PENDING')
        .setDescription(text)
        .setThumbnail('https://cdn.discordapp.com/attachments/780663000997822464/845678257747001384/1000_F_341430880_M62k7gl1cRToJ22De6nwrIasB6wNejCr.jpg')   
        .setFooter('KMPGC BOT')
        .setTimestamp()
          message.channel.send(embed);
          message.channel.stopTyping()
         }
        });

        client.on("message", (message) => {
          if (message.content.startsWith(`.wla`)) {
            var text = message.content.split(' ').slice(1).join(' ');
            if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
            message.delete();
            const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(
                  "KMPGC",
                  "https://cdn.discordapp.com/attachments/810812254936498176/841957312969048064/811885160042594346.gif"
                )
          .setTitle('WHITELIST ACCEPTED')
          .setDescription(text)
          .setThumbnail('https://cdn.discordapp.com/attachments/811275118424621107/841956380884598794/tenor.gif')
          .setImage('https://cdn.discordapp.com/attachments/811275118424621107/841956504705171456/the_kmpgc.gif')   
          .setFooter('KMPGC BOT')
          .setTimestamp()
            message.channel.send(embed);
            message.channel.stopTyping()
           }
          });

          client.on("message", (message) => {
            if (message.content.startsWith(`.wlr`)) {
              var text = message.content.split(' ').slice(1).join(' ');
              if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
              message.delete();
              const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(
                    "KMPGC",
                    "https://cdn.discordapp.com/attachments/810812254936498176/841957312969048064/811885160042594346.gif"
                  )
            .setTitle('WHITELIST REJACTED')
            .setDescription(text)
            .setThumbnail('https://cdn.discordapp.com/attachments/811275118424621107/841956380884598794/tenor.gif')
            .setImage('https://cdn.discordapp.com/attachments/811275118424621107/841956504705171456/the_kmpgc.gif')   
            .setFooter('KMPGC BOT')
            .setTimestamp()
              message.channel.send(embed);
              message.channel.stopTyping()
             }
            });
      

client.on("message", (message) => {
    if (message.content.startsWith(`.s`)) {
      var text = message.content.split(' ').slice(1).join(' ');
      if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
       message.channel.send(text);
      message.delete();
      message.channel.stopTyping()
     }
});



client.login(process.env.TOKEN);

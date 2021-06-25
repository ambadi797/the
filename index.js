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
    "🎉HAPPY BDAY AMBADI ANNA",
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

client.on("message", (message) => {
    if (message.content.startsWith(`.ann`)) {
      var text = message.content.split(' ').slice(1).join(' ');
      if(!text) return message.channel.send('Please use it like this example:\n**!say Bottom Text**');
      message.delete();
      const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(
            "KMPGC",
            "https://cdn.discordapp.com/attachments/810812254936498176/841957312969048064/811885160042594346.gif"
          )
    .setTitle('ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ')
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
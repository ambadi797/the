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
    "kmpgcworld.heroku.com",
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

client.on('message', message => {
    if (message.content === '.help') {
        message.author.send["HELP COMMANDS",
"`prefix` = .",
"`server offline` = .off",
"server online = .on",
"ping = .ping",
"annoucement = .ann",
"MC server ban annouce = .b",
"Bot say cmd = .s",
"Discord kick = .kick @discord ID",
"Discord Ban = .ban @discord ID",
"play Moosic = .play",
"leave Moosic = .leave"]
        message.react('😈');
    }
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
            "https://cdn.discordapp.com/emojis/786568294559645696.gif?v=1"
          )
    .setTitle('ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ')
    .addField('ᴀɴɴᴏᴜɴᴄᴇ ву', message.author)
    .setDescription(text)
    .setThumbnail('https://cdn.discordapp.com/attachments/780663000997822464/847292333288194100/logo3.png')
    .setImage('https://media.discordapp.net/attachments/786193887978979438/786386654650433586/13-26-52-nitro_1.gif')   
    .setFooter('KMPGC BOT')
    .setTimestamp()
      message.channel.send(embed);
      message.channel.stopTyping()
      message.react('🛡');
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
          .setThumbnail('https://cdn.discordapp.com/attachments/780663000997822464/848835835565834320/27761366-a-rubber-stamp-with-an-accepted-seal.jpg')
	  .addField('ACCEPTED BY', message.author)
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

client.on('messageDelete', message => {
  if(!message.partial) {
      const channel = client.channels.cache.get('811275118424621107');
      if(channel) {
          const embed = new MessageEmbed()
              .setTitle('Deleted Message')
              .addField('Author', `${message.author.tag} (${message.author.id})`, true)
              .addField('Channel', `${message.channel.name} (${message.channel.id})`, true)
              .setDescription(message.content)
              .setTimestamp();
          channel.send(embed);
      }
  }
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '.createpoll') {
        if(userCreatedPolls.has(message.author.id)) {
            message.channel.send("You already have a poll going on right now.");
            return;
        }
        message.channel.send("Enter options. Max 5. Type done when finished.");
        let filter = m => {
            if(m.author.id === message.author.id) {
                if(m.content.toLowerCase() === 'done') collector.stop();
                else return true;
            }
            else return false;
        }
        let collector = message.channel.createMessageCollector(filter, { maxMatches: 5 });
        let pollOptions = await getPollOptions(collector);
        if(pollOptions.length < 2) {
            message.channel.send("Not enough options, must contain 2!");
            return;
        }
        let embed = new discord.RichEmbed();
        embed.setTitle("Your Poll");
        embed.setDescription(pollOptions.join("\n"));
        let confirm = await message.channel.send(embed);
        
        await confirm.react('✅');
        await confirm.react('❎');

        let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
        let reaction = (await confirm.awaitReactions(reactionFilter, { max: 1 })).first();
        if(reaction.emoji.name === '✅') {
            message.channel.send("Poll will begin in 1 seconds.");
            await delay(1000);
            message.channel.send("Vote now!");
            let userVotes = new Map();
            let pollTally = new discord.Collection(pollOptions.map(o => [o, 0]));
            let pollFilter = m => !m.bot;
            let voteCollector = message.channel.createMessageCollector(pollFilter, {
                time: 60000
            });
            userCreatedPolls.set(message.author.id, voteCollector);
            await processPollResults(voteCollector, pollOptions, userVotes, pollTally);
            let max = Math.max(...pollTally.array());
            console.log(pollTally.entries());
            let entries = [...pollTally.entries()];
            let winners = [];
            let embed = new discord.RichEmbed();
            let desc = '';
            entries.forEach(entry => entry[1] === max ? winners.push(entry[0]) : null);
            entries.forEach(entry => desc  += entry[0] + " received " + entry[1] + " votes(s)\n");
            embed.setDescription(desc);

            if(winners.length === 1) {
                message.channel.send(winners[0] + " is the winner!", embed);
            }
            else {
                message.channel.send("We have a draw!", embed);
            }
        }   
        else if(reaction.emoji.name === '❎') {
            message.channel.send("Poll cancelled.");
        }
    }
    else if(message.content.toLowerCase() === '.stopvote') {
        if(userCreatedPolls.has(message.author.id)) {
            console.log("Trying to stop poll.");
            userCreatedPolls.get(message.author.id).stop();
            userCreatedPolls.delete(message.author.id);
        }
        else {
            message.channel.send("You don't have a poll going on right now.");
        }
    }
});

function processPollResults(voteCollector, pollOptions, userVotes, pollTally) {
    return new Promise((resolve, reject) => {
        voteCollector.on('collect', msg => {
            let option = msg.content.toLowerCase();
            if(!userVotes.has(msg.author.id) && pollOptions.includes(option)) {
                userVotes.set(msg.author.id, msg.content);
                let voteCount = pollTally.get(option);
                pollTally.set(option, ++voteCount);
            }
        });
        voteCollector.on('end', collected => {
            console.log("Collected " + collected.size + " votes.");
            resolve(collected);
        })
    });
}

function getPollOptions(collector) {
    return new Promise((resolve, reject) => {
        collector.on('end', collected => resolve(collected.map(m => m.content.toLowerCase())));
    });
}

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}



client.login(process.env.TOKEN);

module.exports = {
    name: 'mc',
    description: "Embeds!",
    execute(client, message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('SERVER IP:- kmpgc.mc-srv.com')
        .setDescription('SERVER PORT:-UNKOWN')
        .setThumbnail('https://cdn.discordapp.com/attachments/822851082844635169/839102658186051604/tenor.gif')
        .setImage('https://cdn.discordapp.com/attachments/821185128713158659/839051954759794708/tenor.gif')
        .setFooter('KMPGC.WORLD')
        .setField('SEND BY', message.author)

        message.channel.send(newEmbed)
    }
}
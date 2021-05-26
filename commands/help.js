module.exports = {
    name: 'on',
    description: "Embeds!",
    execute(client, message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('HELP')
        .setDescription(``)
        .setField('DEVELOPER BY', message.Author)
        .setThumbnail('https://cdn.discordapp.com/attachments/821185128713158659/839050350480457728/811885160042594346.gif')
        .setImage('https://cdn.discordapp.com/attachments/821185128713158659/839051954759794708/tenor.gif')
        .setFooter('KMPGC.WORLD')

        message.channel.send(newEmbed)
    }
}
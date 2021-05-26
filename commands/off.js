module.exports = {
    name: 'off',
    description: "Embeds!",
    execute(client, message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('SERVER IS OFFLINE')
        .setThumbnail('https://cdn.discordapp.com/attachments/821185128713158659/839052016176070666/837691741268082689.gif')
        .setImage('https://cdn.discordapp.com/attachments/821185128713158659/839051976065941514/source-2.gif')
        .setFooter('KMPGC.WORLD')

        message.channel.send(newEmbed)
    }
}
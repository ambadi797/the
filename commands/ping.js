const { GuildMember } = require("discord.js")

module.exports = {
    name: 'ping',
    description: "Embeds!",
    execute(client, message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`->『${client.ws.ping}』<-`)
        .setAuthor('YOUR PING')
        .setFooter('KMPGC.WORLD')
        .setDescription('pong!')

        message.channel.send(newEmbed)
    }
}
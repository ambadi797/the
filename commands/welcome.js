const { MessageEmbed, GuildMember, Role } = require("discord.js")

module.exports = (client) => {
    const welcomechannelId = '811243625647570985'
    const targetChannelId = `811256128804618250`
    const genarelchannelId = `844872610956967947` 

    client.on('guildMemberAdd', (member) => {
        console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
        const channel = member.guild.channels.cache.get(welcomechannelId)

        const embed = new MessageEmbed()
        .setTitle(`Welcome To ${member.guild.name}`)
          .setDescription(`β«<@${member.id}>β«
           βWelcome to β«ππ π£ππ πͺπ’π₯ππβ«
            β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
           βπ READ SERVER RULE ${member.guild.channels.cache.get(targetChannelId).toString()}π
            β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
           βπ° Chat With others at ${member.guild.channels.cache.get(genarelchannelId).toString()}π°`)
          .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        // You Can Add More Fields If You Want
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
        .setImage('https://media.discordapp.net/attachments/786193887978979438/786386654650433586/13-26-52-nitro_1.gif')
    channel.send(embed)
        
    })




const leavechannelId = '845601693127409675' //Channel You Want to Send The Leave Message

client.on('guildMemberRemove', (member) => {
    // You Can Do The Same For Leave Message
    const leavemessage = `<@${member.id}> Just Left Server  \n tata bye bye.`

    const channel1 = member.guild.channels.cache.get(leavechannelId)
    channel1.send(leavemessage)
})
}

const { MessageEmbed } = require('discord.js')

module.exports = {
   name: 'ban', // You Can Keep Any Name
    description: 'bans A User.', // Optional 
    permissions: 'BAN_MEMBERS', // You Can Keep Any Permissions
    permissionError: 'You Dont Have Perms To BAN Someone',
    expectedArgs: '+ban @User', // Optional

   execute(client, message, args) {
        const member = message.mentions.members.first()
        if(!member) return message.reply('You Need To Mention A Member To ban.') // Mention To Kick.
        member.ban()

        const embed = new MessageEmbed()
        .setTitle('User ban')
        .setDescription(`<@${member.user.id}> Has Been ban.`)
        .addField('banned By', message.author)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
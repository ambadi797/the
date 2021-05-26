module.exports = {
    name: 'clear',
    descripton: "Clear messages!",
    async execute(client, message, args,) {
        if(!args[0]) return message.replay("please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.replay("please enter a real number!");

        if(args[0] > 100) return message.replay("You canno't delete more than 100 messages!");
        if(args[0] < 1) return message.replay("You must delete at least one message!")

        await message.channel.messages.fetch({limit: args[0]}).then(message =>{
            message.channel.bulkDelete(message);
        });
    }
}
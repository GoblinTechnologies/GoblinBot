/*jshint esversion: 6 */

module.exports = {
    name: 'intro',
    description: 'Welcome\'s member to server',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to welcome them!');
        }

        const taggedUser = message.mentions.users.first();

        message.channel.send(`Welcome to the server, ${taggedUser.username}`);
    },
};
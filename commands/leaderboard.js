module.exports = {
	name: 'cmdTemplateAdmin',
	description: 'This is a template for creating a command used by developers only.',
	execute(message, args) {
		return message.channel.send(
			currency.sort((a, b) => b.balance - a.balance)
				.filter(user => client.users.cache.has(user.user_id))
				.first(10)
				.map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
				.join('\n'),
			{ code: true }
		);
	},
};
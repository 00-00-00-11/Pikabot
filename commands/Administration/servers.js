const { MessageEmbed } = require('discord.js');
const ee = require('../../config/embed.json');

module.exports = {
	name: "servers",
	category: "Bot",
	aliases: [],
	usage: "servers",
	description: "Mostra os servers em que eu estou",
	whitelistOnly: true,
	run: async (client, message) => {
		var servers = "";

		client.guilds.cache.forEach((guild) => {
			servers = servers + `**${guild.name}** | \`${guild.id}\`\n`;
		});

		let embed = new MessageEmbed()
			.setDescription(servers)
			.setColor(ee.color)
		message.channel.send({ embeds: [embed] });
	}
};

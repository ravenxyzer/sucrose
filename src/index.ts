import { SapphireClient } from '@sapphire/framework';
import dotenv from 'dotenv'
dotenv.config()

const client = new SapphireClient({
	defaultPrefix: "t.",
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_BANS',
		'GUILD_EMOJIS_AND_STICKERS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS'
	]
});
client.login(process.env.TOKEN)
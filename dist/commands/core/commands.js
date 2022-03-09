"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
class CommandsCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'commands', aliases: ['cmds'], description: 'sends a command list', cooldownDelay: 1000 /* Second */ * 5 }));
    }
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const commands = this.container.stores.get("commands");
            const bot = this.container.client.user;
            const panel = new discord_js_1.MessageEmbed()
                .setTitle(`・ ✦ — ${bot.username} Commands`)
                .setThumbnail(bot.displayAvatarURL({ dynamic: true, size: 512 }))
                .setDescription(`Berikut merupakan perintah-perintah yang tersedia`)
                .setColor('#A5D5EB')
                .addFields({
                name: '✧ **Core**',
                value: commands
                    .filter((cmd) => cmd.category === "core")
                    .map((cmd) => (0, builders_1.inlineCode)(cmd.name))
                    .join(", ")
            }, {
                name: '✧ **Embed**',
                value: commands
                    .filter((cmd) => cmd.category === "embed")
                    .map((cmd) => (0, builders_1.inlineCode)(cmd.name))
                    .join(", ")
            }, {
                name: '✧ **Moderation**',
                value: commands
                    .filter((cmd) => cmd.category === "moderation")
                    .map((cmd) => (0, builders_1.inlineCode)(cmd.name))
                    .join(", ")
            }, {
                name: '✧ **Utility**',
                value: commands
                    .filter((cmd) => cmd.category === "utility")
                    .map((cmd) => (0, builders_1.inlineCode)(cmd.name))
                    .join(", ")
            });
            return yield message.reply({ embeds: [panel] });
        });
    }
}
exports.CommandsCommand = CommandsCommand;

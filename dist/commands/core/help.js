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
const discord_js_1 = require("discord.js");
const framework_1 = require("@sapphire/framework");
class HelpCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'help', aliases: ['info'], description: 'sends an help', cooldownDelay: 1000 /* Second */ * 5 }));
    }
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const bot = this.container.client.user;
            const panel = new discord_js_1.MessageEmbed()
                .setTitle('・ ✦ — Sucrose Profile')
                .setThumbnail(bot.displayAvatarURL({ dynamic: true, size: 512 }))
                .setDescription(`Sucrose merupakan bot official dari server **Genshin Impact ID**.\nGunakan perintah \`s.commands\` atau \`s.cmds\` untuk menampilkan perintah-perintah yang tersedia lainnya.`)
                .setColor('#A5D5EB');
            return yield message.reply({ embeds: [panel] });
        });
    }
}
exports.default = HelpCommand;

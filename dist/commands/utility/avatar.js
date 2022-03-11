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
exports.AvatarCommand = void 0;
const framework_1 = require("@sapphire/framework");
const IPersonal_1 = require("../../structures/client/message/IPersonal");
const discord_js_1 = require("discord.js");
class AvatarCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'avatar', aliases: ['av'], description: 'Sends a user avatar image', cooldownDelay: 1000 /* Second */ * 5 }));
    }
    messageRun(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const bot = this.container.client.user;
            const user = message.mentions.users.first() || message.author;
            // const authId = user.id
            // const authAv = user.avatar
            const name = user.username;
            const panel = new discord_js_1.MessageEmbed()
                .setTitle(`・ ✦ — ${name}'s Avatar`)
                .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
                //[Link](https://cdn.discordapp.com/avatars/${authId}/${authAv}'?size=4096)
                .setColor('#A5D5EB');
            panel.setFooter({ text: `${user.username} - ${IPersonal_1.Aboutme.watermark}`, iconURL: user.displayAvatarURL({ dynamic: true, size: 512 }) });
            return yield message.reply({ embeds: [panel] });
        });
    }
}
exports.AvatarCommand = AvatarCommand;

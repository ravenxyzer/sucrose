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
exports.StatusCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
class StatusCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'status', aliases: ['info'], description: 'sends client status', preconditions: ['OwnerOnly'], cooldownDelay: 1000 /* Second */ * 5 }));
    }
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            let timestamp = framework_1.container.client.readyTimestamp / 1000;
            let uptime = timestamp.toFixed(0);
            const bot = this.container.client.user;
            const panel = new discord_js_1.MessageEmbed()
                .setTitle(`✿⠀Client Status`)
                .setDescription(`**Client**: \`🔹 Online\` - \`${framework_1.container.client.ws.ping}ms\`\n**Uptime**: <t:${(uptime)}:R>\n**Database**: \`🔸 Disconnected\``)
                .setColor('#A5D5EB');
            panel.setFooter({ text: `${bot.username} - Developed by Zarr#2072`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
            return yield message.channel.send({ embeds: [panel] });
        });
    }
}
exports.StatusCommand = StatusCommand;

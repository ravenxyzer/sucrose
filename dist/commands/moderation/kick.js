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
exports.SayCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
class SayCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'kick', description: 'kicks a member', requiredUserPermissions: ["KICK_MEMBERS"], cooldownDelay: 1000 /* Second */ * 2 }));
    }
    messageRun(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = args.finished ? null : args.pick("member");
            const reason = args.finished ? null : args.rest("string");
            if (!(yield member)) {
                const panel = new discord_js_1.MessageEmbed()
                    .setDescription(`❌⠀Target tidak ditemukan!`)
                    .setColor("RED");
                return yield message.reply({ embeds: [panel] });
            }
            if (!(yield member).kickable) {
                const panel = new discord_js_1.MessageEmbed()
                    .setDescription(`⛔⠀Tidak dapat menendang target!`)
                    .setColor("RED");
                return yield message.reply({ embeds: [panel] });
            }
            if (member) {
                const panel = new discord_js_1.MessageEmbed()
                    .setDescription(`🛑⠀Menendang ${yield member} ・ Alasan: ${(yield reason).substring(23)}`)
                    .setColor("GREEN")
                    .setTimestamp();
                panel.setFooter({ text: `Kicked by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 512 }) });
                yield (yield member).kick();
                return yield message.reply({ embeds: [panel] });
            }
        });
    }
}
exports.SayCommand = SayCommand;

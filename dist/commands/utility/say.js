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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayCommand = void 0;
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const IPersonal_1 = require("../../structures/client/message/IPersonal");
const fs_1 = __importDefault(require("fs"));
class SayCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'say', aliases: ['echo'], description: 'sends an message as the bot', requiredUserPermissions: ['MANAGE_MESSAGES'], cooldownDelay: 1000 /* Second */ * 1 }));
    }
    messageRun(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const bot = this.container.client.user;
            const say = args.finished ? null : args.rest("string");
            if (!say)
                return;
            if ((yield say) === "log") {
                fs_1.default.readFile('../src/structures/client/logs/logger.txt', (err, data) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    const dataByLine = data.toString('utf-8').split("\n").reverse().join("\n");
                    const panel = new discord_js_1.MessageEmbed()
                        .setTitle(`・ ✦ — Say Logs`)
                        .setDescription(`${dataByLine}`)
                        .setColor("GREEN");
                    panel.setFooter({ text: `${bot.username} - ${IPersonal_1.Aboutme.watermark}`, iconURL: bot.displayAvatarURL({ dynamic: true, size: 512 }) });
                    yield message.reply({ embeds: [panel] });
                }));
            }
            else if (yield say) {
                fs_1.default.writeFile('../src/structures/client/logs/logger.txt', `${message.author.username}: "${yield say}"\n`, { flag: 'a' }, err => { });
                message.delete();
                console.log(`${message.author.username}> ${yield say}`);
                yield message.channel.send({ content: yield say });
            }
        });
    }
}
exports.SayCommand = SayCommand;

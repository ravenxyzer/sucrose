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
class SayCommand extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'say', aliases: ['echo'], description: 'sends an message as the bot', requiredUserPermissions: ['MANAGE_MESSAGES'], cooldownDelay: 1000 /* Second */ * 2 }));
    }
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            message.delete();
            const say = message.content.slice(6).trim();
            if (!say)
                return;
            yield message.channel.send(say);
            yield console.log(`${message.author.username}> ${say}`);
        });
    }
}
exports.SayCommand = SayCommand;

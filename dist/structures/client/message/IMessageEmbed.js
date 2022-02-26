"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMessageEmbed = void 0;
const discord_js_1 = require("discord.js");
class IMessageEmbed extends discord_js_1.MessageEmbed {
    constructor() {
        super();
        this.setColor("#A5D5EB");
    }
}
exports.IMessageEmbed = IMessageEmbed;

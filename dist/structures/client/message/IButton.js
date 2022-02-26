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
exports.IButton = void 0;
const discord_js_1 = require("discord.js");
class IButton {
    /**
     * Initialize the buttons manager
     * @param {IClient} client The client instance
     * @returns {IButton} The buttons manager instance
     */
    constructor(client) {
        this.client = client;
        this.roles = [];
        return this;
    }
    /**
     * Creates a new role for the button
     * @param {ButtonColors} color The color of the button
     * @param {String} label The label of the button
     * @param {String} emoji The emoji of the button
     * @param {String} role The role id
     * @returns {ButtonsObject} The role object
     */
    createRole({ color, label, emoji, role, }) {
        this.roles.push({
            color: color,
            label: label,
            emoji: emoji,
            role: role,
        });
        return { color: color, label: label, emoji: emoji, role: role };
    }
    /**
     * Creates a new button instance
     * @param {IMessageEmbed} content The embed content
     * @param {ButtonsObject[]} role The array role id for the button
     * @param {String} channelId The channel id for the button to be sent
     * @returns {Message} The message content
     */
    createButtons({ content, role, channelId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const buttons = [];
            const rows = [];
            role.forEach((buttonsObject) => {
                const button = new discord_js_1.MessageButton();
                button.setStyle(buttonsObject.color);
                button.setLabel(buttonsObject.label);
                button.setCustomId(`roles:${buttonsObject.role}`);
                if (buttonsObject.emoji) {
                    button.setEmoji(buttonsObject.emoji);
                }
                buttons.push(button);
            });
            for (let index = 0; index < Math.ceil(role.length / 5); index++) {
                rows.push(new discord_js_1.MessageActionRow());
            }
            rows.forEach((row, index) => {
                row.addComponents(buttons.slice(0 + index * 5, 5 + index * 5));
            });
            const channel = this.client.channels.cache.find((channel) => channel.id === channelId);
            return channel.send({ embeds: [content], components: rows });
        });
    }
}
exports.IButton = IButton;

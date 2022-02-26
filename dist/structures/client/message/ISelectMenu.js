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
exports.ISelectMenu = void 0;
const discord_js_1 = require("discord.js");
class ISelectMenu {
    /**
     * Initialize the select menu manager
     * @param {IClient} client The client instance
     * @returns {ISelectMenu} The select menu manager instance
     */
    constructor(client) {
        this.client = client;
        this.roles = [];
        return this;
    }
    /**
     * Creates a new role for the select menu
     * @param {String} label The label of the role
     * @param {String} emoji The emoji of the role
     * @param {String} role The role id
     * @returns {MenuObject} The role object
     */
    createRole({ label, emoji, role }) {
        this.roles.push({
            label: label,
            emoji: emoji,
            role: role,
        });
        return { label: label, emoji: emoji, role: role };
    }
    /**
     * Creates a new select menu instance
     * @param {IMessageEmbed} content The embed content
     * @param {MenuObject[]} role The array role id for the select menu
     * @param {String} channelId The channel id for the button to be sent
     * @param {MenuType} type The type of the select menu
     * @param {String} minimum The minimum amount of roles can be selected
     * @param {String} maximum The maximum amount of roles can be selected
     * @returns {Message} The message content
     */
    createMenus({ content, role, channelId, type, minimum, maximum, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuOptions = [];
            const roles = [];
            role.forEach((menuObject) => {
                const channel = this.client.channels.cache.find((channel) => channel.id === channelId);
                menuOptions.push({
                    emoji: menuObject.emoji,
                    label: menuObject.label,
                    value: menuObject.role,
                    description: `Click untuk mendapatkan ${channel.guild.roles.cache.get(menuObject.role).name} `.substring(0, 50),
                });
                roles.push(menuObject.role);
            });
            const selectMenu = new discord_js_1.MessageSelectMenu().setCustomId("sm");
            if (!type)
                type = "SINGLE";
            if (type === "MULTIPLE") {
                selectMenu
                    .setMinValues(parseInt(minimum))
                    .setMaxValues(parseInt(maximum));
            }
            selectMenu.customId += `-${type}`;
            selectMenu.addOptions(menuOptions);
            const row = new discord_js_1.MessageActionRow().addComponents([selectMenu]);
            const channel = this.client.channels.cache.find((channel) => channel.id === channelId);
            return channel.send({ embeds: [content], components: [row] });
        });
    }
}
exports.ISelectMenu = ISelectMenu;

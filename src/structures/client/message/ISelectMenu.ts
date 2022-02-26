import {
    Message,
    MessageActionRow,
    MessageSelectMenu,
    MessageSelectOptionData,
    TextChannel,
} from "discord.js";
import { IClient } from "../IClient";
import { IMessageEmbed } from "./IMessageEmbed";

export type MenuType = "SINGLE" | "MULTIPLE";

export type CreateMenuObject = {
    content: IMessageEmbed;
    role: MenuObject[];
    channelId: string;
    type?: MenuType;
    minimum?: string;
    maximum?: string;
};

export type MenuObject = {
    label: string;
    emoji: string;
    role: string;
};

export class ISelectMenu {
    roles: MenuObject[];
    client: IClient;

    /**
     * Initialize the select menu manager
     * @param {IClient} client The client instance
     * @returns {ISelectMenu} The select menu manager instance
     */
    constructor(client: IClient) {
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
    public createRole({ label, emoji, role }: MenuObject): MenuObject {
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
    public async createMenus({
        content,
        role,
        channelId,
        type,
        minimum,
        maximum,
    }: CreateMenuObject): Promise<Message> {
        const menuOptions: MessageSelectOptionData[] = [];
        const roles = [];

        role.forEach((menuObject: MenuObject) => {
            const channel = this.client.channels.cache.find(
                (channel: { id: string }) => channel.id === channelId
            ) as TextChannel;

            menuOptions.push({
                emoji: menuObject.emoji,
                label: menuObject.label,
                value: menuObject.role,
                description: `Click untuk mendapatkan ${
                    channel.guild.roles.cache.get(menuObject.role).name
                } `.substring(0, 50),
            });

            roles.push(menuObject.role);
        });
        const selectMenu = new MessageSelectMenu().setCustomId("sm");

        if (!type) type = "SINGLE";

        if (type === "MULTIPLE") {
            selectMenu
                .setMinValues(parseInt(minimum))
                .setMaxValues(parseInt(maximum));
        }

        selectMenu.customId += `-${type}`;
        selectMenu.addOptions(menuOptions);
        const row = new MessageActionRow().addComponents([selectMenu]);

        const channel = this.client.channels.cache.find(
            (channel: { id: string }) => channel.id === channelId
        ) as TextChannel;

        return channel.send({ embeds: [content], components: [row] });
    }
}

import {
    Message,
    MessageButton,
    MessageActionRow,
    TextChannel,
} from "discord.js";
import { IMessageEmbed } from "./IMessageEmbed";
import { IClient } from "../IClient";

export type ButtonColors = "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER";

export type CreateButtonObject = {
    content: IMessageEmbed;
    role: ButtonsObject[];
    channelId: string;
};

export type ButtonsObject = {
    color: ButtonColors;
    label: string;
    emoji: string;
    role: string;
};

export class IButton {
    roles: ButtonsObject[];
    client: IClient;

    /**
     * Initialize the buttons manager
     * @param {IClient} client The client instance
     * @returns {IButton} The buttons manager instance
     */
    constructor(client: IClient) {
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
    public createRole({
        color,
        label,
        emoji,
        role,
    }: ButtonsObject): ButtonsObject {
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
    public async createButtons({
        content,
        role,
        channelId,
    }: CreateButtonObject): Promise<Message> {
        const buttons: MessageButton[] = [];
        const rows: MessageActionRow[] = [];

        role.forEach((buttonsObject: ButtonsObject) => {
            const button = new MessageButton();

            button.setStyle(buttonsObject.color);
            button.setLabel(buttonsObject.label);
            button.setCustomId(`roles:${buttonsObject.role}`);

            if (buttonsObject.emoji) {
                button.setEmoji(buttonsObject.emoji);
            }
            buttons.push(button);
        });

        for (let index = 0; index < Math.ceil(role.length / 5); index++) {
            rows.push(new MessageActionRow());
        }

        rows.forEach((row: MessageActionRow, index: number) => {
            row.addComponents(buttons.slice(0 + index * 5, 5 + index * 5));
        });

        const channel = this.client.channels.cache.find(
            (channel: { id: string }) => channel.id === channelId
        ) as TextChannel;

        return channel.send({ embeds: [content], components: rows });
    }
}

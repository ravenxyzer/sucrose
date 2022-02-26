import { ApplyOptions } from "@sapphire/decorators";
import { Listener, ListenerOptions } from "@sapphire/framework";
import {
    ButtonInteraction,
    Interaction,
    SelectMenuInteraction,
} from "discord.js";
import { roleMention, userMention } from "@discordjs/builders";

@ApplyOptions<ListenerOptions>({
    once: false,
    event: "interactionCreate",
})
export default class InteractionCreateListener extends Listener {
    private async __handleButtons(button: ButtonInteraction): Promise<void> {
        if (!button.guild) return;

        const id = button.customId;

        const fetchMember = await button.guild.members.fetch(
            button.member.user.id
        );

        const role = id.split(":")[1];

        if (fetchMember.roles.cache.has(role)) {
            fetchMember.roles.remove(role);
            button.reply({
                content: `Melepaskan ${roleMention(role)} dari ${userMention(
                    fetchMember.id
                )}!`,
                ephemeral: true,
            });
        } else {
            fetchMember.roles.add(role);
            button.reply({
                content: `Menambahkan ${roleMention(role)} untuk ${userMention(
                    fetchMember.id
                )}!`,
                ephemeral: true,
            });
        }
    }

    private async __handleSelectMenu(
        menu: SelectMenuInteraction
    ): Promise<void> {
        if (!menu.guild) return;

        const type = menu.customId.split("-")[1];

        const fetchMember = await menu.guild.members.fetch(menu.member.user.id);

        if (type === "MULTIPLE") {
            for (let index = 0; index < menu.values.length; index++) {
                const role = menu.values[index];

                if (fetchMember.roles.cache.has(role)) {
                    fetchMember.roles.remove(role);
                    menu.reply({
                        content: `Melepaskan ${roleMention(
                            role
                        )} dari ${userMention(fetchMember.id)}!`,
                        ephemeral: true,
                    });
                } else {
                    fetchMember.roles.add(role);
                    menu.reply({
                        content: `Menambahkan ${roleMention(
                            role
                        )} untuk ${userMention(fetchMember.id)}!`,
                        ephemeral: true,
                    });
                }
            }
        } else if (type === "SINGLE") {
            if (fetchMember.roles.cache.has(menu.values[0])) {
                fetchMember.roles.remove(menu.values[0]);
                menu.reply({
                    content: `Melepaskan ${roleMention(
                        menu.values[0]
                    )} dari ${userMention(fetchMember.id)}!`,
                    ephemeral: true,
                });
            } else {
                fetchMember.roles.add(menu.values[0]);
                menu.reply({
                    content: `Menambahkan ${roleMention(
                        menu.values[0]
                    )} untuk ${userMention(fetchMember.id)}!`,
                    ephemeral: true,
                });
            }
        }
    }
    
    public async run(interaction: Interaction): Promise<void> {
        if (interaction.isButton()) return this.__handleButtons(interaction);
        if (interaction.isSelectMenu())
            return this.__handleSelectMenu(interaction);
    }
}

import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Message } from "discord.js";
import { IButton } from "../../structures/client/message/IButton";

@ApplyOptions<CommandOptions>({
    name: "testButton",
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    // requiredUserPermissions: ["MANAGE_MESSAGES"],
    preconditions: ["OwnerOnly"],
})
export default class ButtonsTestCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();

        const ButtonsManager = new IButton(this.container.client);

        const TestRole = ButtonsManager.createRole({
            color: "SECONDARY",
            label: "TEST",
            role: "909742907148337163",
            emoji: "<:ehe:910046703619538984>",
        });
        return ButtonsManager.createButtons({
            role: [TestRole],
            content: new IMessageEmbed()
            .setDescription("Test Embed for Buttons!")
            .setColor('#A5D5EB'),
            channelId: message.channel.id,
        });
    }
}
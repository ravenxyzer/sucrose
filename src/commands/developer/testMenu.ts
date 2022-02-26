import { IMessageEmbed } from "../../structures/client/message/IMessageEmbed";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";
import { Message } from "discord.js";
import { ISelectMenu } from "../../structures/client/message/ISelectMenu";

@ApplyOptions<CommandOptions>({
    name: "testMenu",
    description: ".",
    detailedDescription: ".",
    quotes: [],
    enabled: true,
    preconditions: ["OwnerOnly"],
})
export default class SelectMenuTestCommand extends Command {
    public async messageRun(message: Message): Promise<Message> {
        await message.delete();

        const SelectMenuManager = new ISelectMenu(this.container.client);

        const TestRole = SelectMenuManager.createRole({
            label: "TEST",
            role: "909742907148337163",
            emoji: "<:Awikwok:919624868813737984>",
        });

        return SelectMenuManager.createMenus({
            role: [TestRole],
            content: new IMessageEmbed().setDescription(
                "Test Embed for Select Menus!"
            ),
            channelId: message.channel.id,
            type: "SINGLE",
        });
    }
}
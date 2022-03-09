import { MessageEmbed } from "discord.js";

export class IMessageEmbed extends MessageEmbed {
    constructor() {
        super();
        
        this.setColor("#A5D5EB");
    }
}
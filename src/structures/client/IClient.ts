import { SapphireClient } from "@sapphire/framework";
import { container } from "@sapphire/pieces";
import { Logger } from "winston";
import { logger } from "../utils/ILogger";
import { Utils } from "../utils/utils";

const utils = new Utils();

export interface IClientOptions {
    prefix: string;
}

export class IClient extends SapphireClient {
    constructor(options: IClientOptions) {
        super({
            partials: ["GUILD_MEMBER", "REACTION", "MESSAGE"],
            intents: [
                "GUILDS",
                "GUILD_MEMBERS",
                "GUILD_EMOJIS_AND_STICKERS",
                "GUILD_VOICE_STATES",
                "GUILD_MESSAGES",
                "GUILD_MESSAGE_REACTIONS",
                "DIRECT_MESSAGES",
                "DIRECT_MESSAGE_REACTIONS",
            ],
            allowedMentions: {
                parse: ["everyone", "users", "roles"],
                repliedUser: false,
            },
            defaultPrefix: options.prefix,
            caseInsensitiveCommands: true,
            caseInsensitivePrefixes: true,
        });

        container.client = this;
        container.utils = utils;
        container.logs = logger;
    }

    /**
     * Initialize the client
     * @param token {string} The token to use for the client
     * @returns Promise<string>
     */
    async __intialize?(token: string): Promise<string> {
        return super.login(token);
    }
}

declare module "@sapphire/pieces" {
    interface Container {
        utils: Utils;
        logs: Logger;
    }
}
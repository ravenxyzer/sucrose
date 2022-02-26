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
exports.IClient = void 0;
const framework_1 = require("@sapphire/framework");
const pieces_1 = require("@sapphire/pieces");
const ILogger_1 = require("../utils/ILogger");
const utils_1 = require("../utils/utils");
const utils = new utils_1.Utils();
class IClient extends framework_1.SapphireClient {
    constructor(options) {
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
        pieces_1.container.client = this;
        pieces_1.container.utils = utils;
        pieces_1.container.logs = ILogger_1.logger;
    }
    /**
     * Initialize the client
     * @param token {string} The token to use for the client
     * @returns Promise<string>
     */
    __intialize(token) {
        const _super = Object.create(null, {
            login: { get: () => super.login }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.login.call(this, token);
        });
    }
}
exports.IClient = IClient;

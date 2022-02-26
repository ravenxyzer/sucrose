"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const IMessageEmbed_1 = require("../../structures/client/message/IMessageEmbed");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const ISelectMenu_1 = require("../../structures/client/message/ISelectMenu");
let SelectMenuTestCommand = class SelectMenuTestCommand extends framework_1.Command {
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            const SelectMenuManager = new ISelectMenu_1.ISelectMenu(this.container.client);
            const TestRole = SelectMenuManager.createRole({
                label: "TEST",
                role: "909742907148337163",
                emoji: "<:Awikwok:919624868813737984>",
            });
            return SelectMenuManager.createMenus({
                role: [TestRole],
                content: new IMessageEmbed_1.IMessageEmbed().setDescription("Test Embed for Select Menus!"),
                channelId: message.channel.id,
                type: "SINGLE",
            });
        });
    }
};
SelectMenuTestCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "testMenu",
        description: ".",
        detailedDescription: ".",
        quotes: [],
        enabled: true,
        preconditions: ["OwnerOnly"],
    })
], SelectMenuTestCommand);
exports.default = SelectMenuTestCommand;

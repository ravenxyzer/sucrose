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
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const builders_1 = require("@discordjs/builders");
let InteractionCreateListener = class InteractionCreateListener extends framework_1.Listener {
    __handleButtons(button) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!button.guild)
                return;
            const id = button.customId;
            const fetchMember = yield button.guild.members.fetch(button.member.user.id);
            const role = id.split(":")[1];
            if (fetchMember.roles.cache.has(role)) {
                fetchMember.roles.remove(role);
                button.reply({
                    content: `Melepaskan ${(0, builders_1.roleMention)(role)} dari ${(0, builders_1.userMention)(fetchMember.id)}!`,
                    ephemeral: true,
                });
            }
            else {
                fetchMember.roles.add(role);
                button.reply({
                    content: `Menambahkan ${(0, builders_1.roleMention)(role)} untuk ${(0, builders_1.userMention)(fetchMember.id)}!`,
                    ephemeral: true,
                });
            }
        });
    }
    __handleSelectMenu(menu) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!menu.guild)
                return;
            const type = menu.customId.split("-")[1];
            const fetchMember = yield menu.guild.members.fetch(menu.member.user.id);
            if (type === "MULTIPLE") {
                for (let index = 0; index < menu.values.length; index++) {
                    const role = menu.values[index];
                    if (fetchMember.roles.cache.has(role)) {
                        fetchMember.roles.remove(role);
                        menu.reply({
                            content: `Melepaskan ${(0, builders_1.roleMention)(role)} dari ${(0, builders_1.userMention)(fetchMember.id)}!`,
                            ephemeral: true,
                        });
                    }
                    else {
                        fetchMember.roles.add(role);
                        menu.reply({
                            content: `Menambahkan ${(0, builders_1.roleMention)(role)} untuk ${(0, builders_1.userMention)(fetchMember.id)}!`,
                            ephemeral: true,
                        });
                    }
                }
            }
            else if (type === "SINGLE") {
                if (fetchMember.roles.cache.has(menu.values[0])) {
                    fetchMember.roles.remove(menu.values[0]);
                    menu.reply({
                        content: `Melepaskan ${(0, builders_1.roleMention)(menu.values[0])} dari ${(0, builders_1.userMention)(fetchMember.id)}!`,
                        ephemeral: true,
                    });
                }
                else {
                    fetchMember.roles.add(menu.values[0]);
                    menu.reply({
                        content: `Menambahkan ${(0, builders_1.roleMention)(menu.values[0])} untuk ${(0, builders_1.userMention)(fetchMember.id)}!`,
                        ephemeral: true,
                    });
                }
            }
        });
    }
    run(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (interaction.isButton())
                return this.__handleButtons(interaction);
            if (interaction.isSelectMenu())
                return this.__handleSelectMenu(interaction);
        });
    }
};
InteractionCreateListener = __decorate([
    (0, decorators_1.ApplyOptions)({
        once: false,
        event: "interactionCreate",
    })
], InteractionCreateListener);
exports.default = InteractionCreateListener;

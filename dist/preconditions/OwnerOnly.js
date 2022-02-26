"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerOnlyPrecondition = void 0;
const framework_1 = require("@sapphire/framework");
class OwnerOnlyPrecondition extends framework_1.Precondition {
    run(message) {
        return message.author.id === '387886389800337409'
            ? this.ok()
            : this.error({
                message: 'Hanya owner yang bisa menjalankan perintah ini!',
            });
    }
}
exports.OwnerOnlyPrecondition = OwnerOnlyPrecondition;

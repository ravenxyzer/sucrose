"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandDeniedListener = void 0;
const framework_1 = require("@sapphire/framework");
class CommandDeniedListener extends framework_1.Listener {
    run(error, { message }) {
        if (Reflect.get(Object(error.context), 'silent'))
            return;
        return message.reply({ content: error.message });
    }
}
exports.CommandDeniedListener = CommandDeniedListener;

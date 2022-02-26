"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
class ReadyListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { once: true, event: 'ready' }));
    }
    run(client) {
        var _a;
        const { username, id } = client.user;
        this.container.logger.info(`Successfully logged in as ${username}`);
        (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
            status: 'idle',
            activities: [
                {
                    name: "Genshim Impact ID",
                    type: "WATCHING"
                }
            ]
        });
    }
}
exports.ReadyListener = ReadyListener;

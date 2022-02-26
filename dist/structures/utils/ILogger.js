"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const fs_1 = require("fs");
exports.logger = (0, winston_1.createLogger)({
    level: "debug",
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.simple()),
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.colorize(), winston_1.format.simple()),
        }),
        new winston_1.transports.Stream({
            stream: (0, fs_1.createWriteStream)("./logs/all.log"),
        }),
        new winston_1.transports.Stream({
            stream: (0, fs_1.createWriteStream)("./logs/errors.log"),
            level: "error",
        }),
    ],
});

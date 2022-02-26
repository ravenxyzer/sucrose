import { createLogger, format, transports } from "winston";
import { createWriteStream } from "fs";

export const logger = createLogger({
    level: "debug",
    format: format.combine(format.timestamp(), format.simple()),
    transports: [
        new transports.Console({
            format: format.combine(
                format.timestamp(),
                format.colorize(),
                format.simple()
            ),
        }),
        new transports.Stream({
            stream: createWriteStream("./logs/all.log"),
        }),
        new transports.Stream({
            stream: createWriteStream("./logs/errors.log"),
            level: "error",
        }),
    ],
});
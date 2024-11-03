"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = exports.log = exports.logColor = void 0;
const colors = {
    green: '\x1b[32m%s\x1b[0m',
    red: '\x1b[31m%s\x1b[0m',
    gray: '\x1b[37m%s\x1b[0m'
};
exports.colors = colors;
const logColor = (color, content) => {
    console.log(colors[color], content);
};
exports.logColor = logColor;
const log = (content) => {
    console.log(content);
};
exports.log = log;

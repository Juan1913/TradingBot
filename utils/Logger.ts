const colors = {
    green: '\x1b[32m%s\x1b[0m',
    red: '\x1b[31m%s\x1b[0m',
    gray: '\x1b[37m%s\x1b[0m'
} as const;

type ColorType = keyof typeof colors;

const logColor = (color: ColorType, content: string): void => {
    console.log(colors[color], content);
};

const log = (content: string): void => {
    console.log(content);
};

export { logColor, log, colors };

import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT,
    binanceApiKey: process.env.BINANCE_API_KEY,
    binanceApiSecret: process.env.BINANCE_API_SECRET,
    telegramToken: process.env.TELEGRAM_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
};

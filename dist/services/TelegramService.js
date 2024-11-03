"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
class TelegramService {
    constructor() {
        this.telegramToken = config_1.config.telegramToken || '';
        this.telegramChatId = config_1.config.telegramChatId || '';
    }
    sendNotification(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(`https://api.telegram.org/bot${this.telegramToken}/sendMessage`, {
                    chat_id: this.telegramChatId,
                    text: message,
                });
                return response.data;
            }
            catch (error) {
                throw new Error('Error sending notification to Telegram');
            }
        });
    }
}
exports.default = TelegramService;

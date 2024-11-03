import axios from 'axios';
import { config } from '../config/config';

class TelegramService {
    private telegramToken: string;
    private telegramChatId: string;

    constructor() {
        this.telegramToken = config.telegramToken || '';
        this.telegramChatId = config.telegramChatId || '';
    }

    public async sendNotification(message: string): Promise<any> {
        try {
            const response = await axios.post(
                `https://api.telegram.org/bot${this.telegramToken}/sendMessage`,
                {
                    chat_id: this.telegramChatId,
                    text: message,
                }
            );
            return response.data;
        } catch (error) {
            throw new Error('Error sending notification to Telegram');
        }
    }
}

export default TelegramService;

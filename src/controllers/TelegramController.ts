import { Router, Request, Response } from 'express';
import TelegramService from '../services/TelegramService';

class TelegramController {
    public router: Router;
    private telegramService: TelegramService;

    constructor() {
        this.router = Router();
        this.telegramService = new TelegramService();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/notify', this.sendNotification.bind(this));
    }

    private async sendNotification(req: Request, res: Response): Promise<void> {
        const { message } = req.body;
        try {
            const response = await this.telegramService.sendNotification(message);
            res.json(response);
        } catch (error) {
            // Manejo del tipo `unknown` de `error` en TypeScript
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Error desconocido' });
            }
        }
    }
}

export default TelegramController;

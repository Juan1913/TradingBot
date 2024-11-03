import express, { Application } from 'express';
import BinanceController from './controllers/BinanceController';
import TelegramController from './controllers/TelegramController';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
    }

    private initializeControllers(): void {
        const binanceController = new BinanceController();
        const telegramController = new TelegramController();

        this.app.use('/api/binance', binanceController.router);
        this.app.use('/api/telegram', telegramController.router);
    }
}

export default new App().app;

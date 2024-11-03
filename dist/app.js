"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BinanceController_1 = __importDefault(require("./controllers/BinanceController"));
const TelegramController_1 = __importDefault(require("./controllers/TelegramController"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.initializeControllers();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
    }
    initializeControllers() {
        const binanceController = new BinanceController_1.default();
        const telegramController = new TelegramController_1.default();
        this.app.use('/api/binance', binanceController.router);
        this.app.use('/api/telegram', telegramController.router);
    }
}
exports.default = new App().app;

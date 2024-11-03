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
const express_1 = require("express");
const TelegramService_1 = __importDefault(require("../services/TelegramService"));
class TelegramController {
    constructor() {
        this.router = (0, express_1.Router)();
        this.telegramService = new TelegramService_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/notify', this.sendNotification.bind(this));
    }
    sendNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { message } = req.body;
            try {
                const response = yield this.telegramService.sendNotification(message);
                res.json(response);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = TelegramController;

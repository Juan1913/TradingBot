import { Router, Request, Response } from 'express';
import BinanceService from '../services/BinanceService';

class BinanceController {
    public router: Router;
    private binanceService: BinanceService;

    constructor() {
        this.router = Router();
        this.binanceService = new BinanceService();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/price', this.getPrice.bind(this));
    }

    private async getPrice(req: Request, res: Response): Promise<void> {
        try {
            const price = await this.binanceService.getPrice();
            res.json(price);
        } catch (error) {
            
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Error desconocido' });
            }
        }
    }
}

export default BinanceController;

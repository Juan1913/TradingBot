import axios from 'axios';
import { config } from '../config/config';

class BinanceService {
    private apiKey: string;
    private apiSecret: string;

    constructor() {
        this.apiKey = config.binanceApiKey || '';
        this.apiSecret = config.binanceApiSecret || '';
    }

    public async getPrice(): Promise<any> {
        try {
            const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
            return response.data;
        } catch (error) {
            throw new Error('Error fetching price from Binance');
        }
    }
}

export default BinanceService;

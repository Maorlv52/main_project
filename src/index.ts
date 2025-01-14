import express, { Request, Response } from 'express';
import mainRoutes from './routes/main_routes';
import connectDB from './configs/db';
import { MAIN_PORT } from './configs/config';
import logger from './configs/logger';
import dotenv from 'dotenv'; // Load dotenv first to ensure env variables are available

dotenv.config(); // Loads variables from .env into process.env

const app = express();

const startServer = async () => {
	try {
		await connectDB();
		app.use(express.json());

		app.use('/main', mainRoutes);

		app.get('/firstReq', (req: Request, res: Response) => {
			res.json({ message: 'Happy developing ✨' });
		});

		app.listen(MAIN_PORT, () => {
			logger.info(`===> Server is running on http://localhost:${MAIN_PORT}`);
		});
	} catch (error) {
		logger.error('===> Failed to start server:', error);
	}
};

startServer();

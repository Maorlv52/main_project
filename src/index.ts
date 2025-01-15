import express, { Request, Response } from 'express';
import mainRoutes from './routes/main_routes';
import connectDB from './configs/db';
import logger from './configs/logger';
import dotenv from 'dotenv';
import { CONSTANTS } from './configs/config';

dotenv.config();

const app = express();

const startServer = async () => {
	try {
		await connectDB();
		app.use(express.json());

		app.use('/main', mainRoutes);

		app.get('/firstReq', (req: Request, res: Response) => {
			res.json({ message: 'Happy developing ✨' });
		});

		app.listen(CONSTANTS.MAIN_PORT, () => {
			logger.info(`===> Server is running on http://localhost:${CONSTANTS.MAIN_PORT}`);
		});
	} catch (error) {
		logger.error('===> Failed to start server:', error);
	}
};

startServer();

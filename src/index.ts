import express, { Request, Response } from 'express';
import mainRoutes from './routes/main_routes';
import connectDB from './configs/db';
import { MAIN_PORT } from './configs/config';
import logger from './configs/logger';

const app = express();
// connectDB();
//
// app.use(express.json());
//
// app.use('/main', mainRoutes);
//
// app.get('/firstReq', (req: Request, res: Response) => {
//   res.json({ message: 'Happy developing ✨' });
// });
//
// app.listen(MAIN_PORT, () => {
//   console.log(`Server is running on http://localhost:${MAIN_PORT}`);
// });

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

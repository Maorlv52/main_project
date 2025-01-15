import mongoose from 'mongoose';
import logger from './logger';
import { MONGO_URI_ADDRESS } from './config';

const connectDB = async () => {
	const mongoURI = process.env.MONGO_URI || MONGO_URI_ADDRESS;

	try {
		await mongoose.connect(mongoURI, {
			serverSelectionTimeoutMS: 10000,
		});
		logger.info(`===> MongoDB connected successfully to: ${mongoURI}`);
	} catch (err) {
		if (err instanceof Error) {
			logger.error(`===> MongoDB connection error: ${err.message}`);
		} else {
			logger.error('===> An unknown error occurred while connecting to MongoDB');
		}
		setTimeout(connectDB, 5000);
	}
};

export default connectDB;

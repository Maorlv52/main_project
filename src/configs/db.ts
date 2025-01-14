import mongoose from 'mongoose';
import logger from './logger';
// import logger from '../logger.js';

const connectDB = async () => {
	const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/main';

	try {
		await mongoose.connect(mongoURI, {
			serverSelectionTimeoutMS: 10000, // Wait for MongoDB to respond for 10 seconds
		});
		logger.info(`MongoDB connected successfully to: ${mongoURI}`);
	} catch (err) {
		if (err instanceof Error) {
			logger.error(`MongoDB connection error: ${err.message}`);
		} else {
			logger.error('An unknown error occurred while connecting to MongoDB');
		}
		setTimeout(connectDB, 5000);
	}
};

// Automatically call connectDB to establish the connection
export default connectDB;

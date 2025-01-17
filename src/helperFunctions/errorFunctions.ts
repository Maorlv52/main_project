import logger from '../configs/logger';

export const throwCustomError = (logMessage: string) => {
	logger.error(logMessage);
	throw new Error(logMessage.split('): ')[1]?.trim() || 'Unknown error occurred');
};

import logger from '../configs/logger';
import { ELogsIntro } from '../enums/logsEnum';

export const throwCustomError = (logMessage: string) => {
	logger.error(`${ELogsIntro.ERROR_FUNCTIONS} ${logMessage}`);
	throw new Error(`${ELogsIntro.ERROR_FUNCTIONS} ${logMessage.split('): ')[1]?.trim() || 'Unknown error occurred'}`);
};

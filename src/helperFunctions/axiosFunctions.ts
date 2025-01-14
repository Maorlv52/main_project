import axios from 'axios';
import { AXIOS_CONFIG } from '../configs/config';
import { disableSSLValidation } from './functions';
import logger from '../configs/logger';


export const sendAxiosHttpRequest = async (url: string, data: any) => {
	try {

		if (!process.env.DISABLE_SSL_VALIDATION){
			logger.error(`[sendAxiosHttpRequest]: error: SSL Validation is not disabled`);
			throw new Error(`[sendAxiosHttpRequest]: error: SSL Validation is not disabled`);
		}

		disableSSLValidation();

		const method = 'post'
		const response = await axios[method](url, data, AXIOS_CONFIG);
		return response.data;
	} catch (e: any) {
		throw new Error(e.message);
	}
}
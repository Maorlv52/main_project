import axios from 'axios';
import { AXIOS_CONFIG } from '../configs/config';
import logger from '../configs/logger';
import { EHttpRequestMethods } from '../enums/httpEnums';

export const sendAxiosHttpRequest = async (data: { url: string; method: EHttpRequestMethods; endpoint: string; payload: any }) => {
	try {
		const { url, endpoint,  method, payload } = data;

		if (!process.env.DISABLE_SSL_VALIDATION || process.env.NODE_TLS_REJECT_UNAUTHORIZED !== '0') {
			logger.error(`[axiosFunctions](sendAxiosHttpRequest): error: SSL Validation is not disabled`);
			throw new Error(`[axiosFunctions](sendAxiosHttpRequest): error: SSL Validation is not disabled`);
		}

		const fixedUrl = `${url}${endpoint}`;

		const response = await axios[method](fixedUrl, payload, AXIOS_CONFIG);
		return response.data;
	} catch (e: any) {
		logger.error(`[axiosFunctions](sendAxiosHttpRequest): error: ${e.message}`);
		throw new Error(e.message);
	}
};

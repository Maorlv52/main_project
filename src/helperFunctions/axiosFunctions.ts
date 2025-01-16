import axios from 'axios';
import { CONSTANTS } from '../configs/config';
import logger from '../configs/logger';
import { EHttpRequestMethods } from '../enums/httpEnums';


const sendAxiosHttpRequest = async (data: { url: string; method: EHttpRequestMethods; endpoint: string; payload: any }) => {
	try {
		validateSsl();
		const { url, endpoint, method, payload } = data;
		const fixedUrl = `${url}${endpoint}`;
		const response = await axios[method](fixedUrl, payload, CONSTANTS.AXIOS_CONFIG);
		return response.data;
	} catch (e: any) {
		logger.error(`[axiosFunctions](sendAxiosHttpRequest): error: ${e.message}`);
		throw new Error(e.message);
	}
};

const validateSsl = () => {
	if (!process.env.DISABLE_SSL_VALIDATION || process.env.NODE_TLS_REJECT_UNAUTHORIZED !== '0') {
		logger.error(`[axiosFunctions](validateSsl): error: SSL Validation is not disabled`);
		throw new Error(`[axiosFunctions](validateSsl): error: SSL Validation is not disabled`);
	}
};

export { sendAxiosHttpRequest };

import * as env from 'env-var';
import { IConstants, IMsEndpointsConfig, IMsPorts, IUrlConfig } from '../interfaces/config.interfaces';

export const MONGO_URI_ADDRESS = 'mongodb://localhost:27017/main';

export const AXIOS_CONFIG = {
	headers: { 'Content-Type': 'application/json' },
};

export const URL_CONFIG: IUrlConfig = {
	BASE_URL: env.get('BASE_URL').required().example('http://localhost:3000').default('http://localhost:3000').asString(),
};

export const MS_ENDPOINTS: IMsEndpointsConfig = {
	EXAMPLE_ENDPOINT: env.get('EXAMPLE_ENDPOINT').required().example('/example').default('/example').asString(),
};

export const MS_PORTS: IMsPorts = {
	EXAMPLE_PORT: env.get('EXAMPLE_PORT').required().example('3000').default('3000').asPortNumber(),
};

export const CONSTANTS: IConstants = {
	MAIN_PORT: 3000,
};

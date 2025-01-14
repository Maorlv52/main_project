import logger from '../configs/logger';
import { IPartialUsersModel } from '../interfaces/interfaces';
import UsersQueries from '../services/db_query/usersQueries';
import { IQueriesUsers } from '../interfaces/queriesUsers';
import axios from 'axios';
import https from 'https';
import { disableSSLValidation } from '../helperFunctions/functions';
import { sendAxiosHttpRequest } from '../helperFunctions/axiosFunctions';
import { EBaseUrls } from '../enums/baseUrlEnums';

export default class MainController {
	private usersQueries: IQueriesUsers;

	constructor() {
		this.usersQueries = new UsersQueries();
	}

	async createUser(data: IPartialUsersModel) {
		try {
			return await this.usersQueries.createNewUser(data);
		} catch (e: any) {
			logger.error(`[mainController](createUser): error: ${e.message}`);
			throw new Error(e.message);
		}
	}

	async getFunnyTranslation(data: any) {
		try {
			return sendAxiosHttpRequest(EBaseUrls.EXAMPLE, data);
		} catch (e: any) {
			logger.error(`[mainController](getFunnyTranslation): error: ${e.message}`);
			throw new Error(e.message);
		}
	}
}

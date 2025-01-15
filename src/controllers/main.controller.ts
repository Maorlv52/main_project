import logger from '../configs/logger';
import { IPartialUsersModel } from '../interfaces/usersModel.interfaces';
import UsersQueries from '../services/db_query/usersQueries';
import { IQueriesUsers } from '../interfaces/queriesUsers';
import { sendAxiosHttpRequest } from '../helperFunctions/axiosFunctions';
import { EBaseUrls } from '../enums/baseUrlEnums';
import { EHttpRequestMethods } from '../enums/httpEnums';
import { IGetFunnyTranslationPayload } from '../interfaces/payload.interface';

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

	async getFunnyTranslation(data: IGetFunnyTranslationPayload) {
		try {
			return sendAxiosHttpRequest({
				url: EBaseUrls.EXAMPLE,
				method: EHttpRequestMethods.POST,
				payload: data.text,
			});
		} catch (e: any) {
			logger.error(`[mainController](getFunnyTranslation): error: ${e.message}`);
			throw new Error(e.message);
		}
	}
}

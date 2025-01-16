import logger from '../configs/logger';
import { IPartialUsersModel } from '../interfaces/usersModel.interfaces';
import UsersQueries from '../services/db_query/usersQueries';
import { IQueriesUsers } from '../interfaces/queriesUsers';
import { sendAxiosHttpRequest } from '../helperFunctions/axiosFunctions';
import { EHttpRequestMethods } from '../enums/httpEnums';
import { ICreateNotification } from '../interfaces/requests.interface';
import { NOTIFICATION_ENDPOINTS, URL_CONFIG } from '../configs/config';

export default class MainController {
	private usersQueries: IQueriesUsers;

	constructor() {
		this.usersQueries = new UsersQueries();
	}

	async createUser(data: IPartialUsersModel) {
		try {
			const newUser = await this.usersQueries.createNewUser(data);

			if (!newUser) {
				throw new Error('User not created');
			}

			return await this.createUserNotification({
				name: newUser.name,
				email: newUser.email,
				status: newUser.status,
				notificationName: 'UserCreated',
				content: 'User created',
			});
		} catch (e: any) {
			logger.error(`[mainController](createUser): error: ${e.message}`);
			throw new Error(e.message);
		}
	}

	async createUserNotification(data: ICreateNotification) {
		try {
			const { name, email, status, notificationName, content } = data;

			console.log(name, email, status, notificationName, content);
			const msUpdate = sendAxiosHttpRequest({
				url: URL_CONFIG.NOTIFICATION_URL,
				endpoint: NOTIFICATION_ENDPOINTS.CREATE_NOTIFICATION,
				method: EHttpRequestMethods.POST,
				payload: { email, status, notificationName, content },
			});

			return msUpdate;
		} catch (e: any) {
			logger.error(`[mainController](createUserNotification): error: ${e.message}`);
			throw new Error(e.message);
		}
	}

	// async getFunnyTranslation(data: IGetFunnyTranslationPayload) {
	// 	try {
	// 		return sendAxiosHttpRequest({
	// 			url: EBaseUrls.EXAMPLE,
	// 			method: EHttpRequestMethods.POST,
	// 			payload: data.text,
	// 		});
	// 	} catch (e: any) {
	// 		logger.error(`[mainController](getFunnyTranslation): error: ${e.message}`);
	// 		throw new Error(e.message);
	// 	}
	// }
}

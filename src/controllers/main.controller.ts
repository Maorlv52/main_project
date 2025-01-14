import logger from '../configs/logger';
import { IPartialUsersModel } from '../interfaces/interfaces';
import UsersQueries from '../services/db_query/usersQueries';
import { IQueriesUsers } from '../interfaces/queriesUsers';

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
}
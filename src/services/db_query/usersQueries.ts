import { IPartialUsersModel } from '../../interfaces/interfaces';
import mongoose from 'mongoose';
import users from '../../models/users.model';
import logger from '../../configs/logger';
import { EStatuses } from '../../enums/usersEnums';

export default class UsersQueries {
	/**
	 * @readonly
	 * @private logger - make log outputs
	 */

	constructor() {}

	async createNewUser(data: IPartialUsersModel) {
		const id = new mongoose.Types.ObjectId();
		const status = EStatuses.INIT;
		const result = await users.create({ ...data, id, status });
		logger.info(`[usersQueries](createNewUser) User created, id: ${id}`);
		return result;
	}
}

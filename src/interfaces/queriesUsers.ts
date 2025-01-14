import { IPartialUsersModel, IUsersModel } from './interfaces';

export interface IQueriesUsers {
	createNewUser(data: IPartialUsersModel): Promise<IUsersModel | null>;
}

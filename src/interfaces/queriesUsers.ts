import { IPartialUsersModel, IUsersModel } from './usersModel.interfaces';

export interface IQueriesUsers {
	createNewUser(data: IPartialUsersModel): Promise<IUsersModel | null>;
}

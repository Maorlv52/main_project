import mongoose from 'mongoose';
import { IUsersModel } from '../interfaces/usersModel.interfaces';
import { EStatuses } from '../enums/usersEnums';

const usersSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Types.ObjectId, unique: true },
		name: { type: String },
		email: { type: String, unique: true },
		status: { type: String, enum: Object.values(EStatuses), required: true },
	},
	{ strict: true, timestamps: true },
);

export default mongoose.model<IUsersModel>('users', usersSchema, 'users');

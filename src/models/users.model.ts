import mongoose from 'mongoose';
import {IUsersModel} from "../interfaces/interfaces";
import {EStatuses} from "../enums/enums";

const usersSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Types.ObjectId, unique: true },
        name: { type: String },
        email: { type: String, unique: true },
        status: {type: String, enum: Object.values(EStatuses), required: true,},
    },
    { strict: true, timestamps: true },
);

export default mongoose.model<IUsersModel>('users', usersSchema, 'users');

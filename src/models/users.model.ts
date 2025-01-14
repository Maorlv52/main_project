import mongoose from 'mongoose';
import {IUsersModel} from "../interfaces/interfaces";

const usersSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Types.ObjectId, unique: true },
        name: { type: String },
        email: { type: String, unique: true },
        status: { type: String }
    },
    { strict: true, timestamps: true },
);

export default mongoose.model<IUsersModel>('users', usersSchema, 'users');

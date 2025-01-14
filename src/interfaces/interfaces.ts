import mongoose from "mongoose";
import {EStatuses} from "../enums/enums";

export interface IUsersModel {
    id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    status: EStatuses;
}

export interface IPartialUsersModel extends Partial<IUsersModel> {}
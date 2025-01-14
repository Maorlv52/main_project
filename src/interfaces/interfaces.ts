import mongoose from "mongoose";

export interface IExamplePost {
    num1: number,
    num2: number
}

export interface IUsersModel {
    id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    status: string;
}

export interface IPartialUsersModel extends Partial<IUsersModel> {}


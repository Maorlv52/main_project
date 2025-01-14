import logger from '../configs/logger';
import {IExamplePost, IPartialUsersModel, IUsersModel} from "../interfaces/interfaces";
import {EExampleEnum} from "../enums/enums";
import users from "../models/users.model";
import mongoose from "mongoose";

export default class MainController {
    constructor() {
    }

    mainFunction(num: number) {
        logger.info(`[main_controller](mainFunction)Main function, number: ${num} and also ${num + 1}`);
        return `Main function, number: ${num} and also ${num + 1}`;
    }

    calculate(data: IExamplePost) {
        const { num1, num2 } = data;
        logger.info(`[main_controller](calculate) hello ${EExampleEnum.MAOR} examplePost function, num1: ${num1}, num2: ${num2} and result: ${num1 + num2}`);
        return `examplePost function, num1: ${num1}, num2: ${num2} and result: ${num1 + num2}`;
    }

    async createUser(data: IPartialUsersModel) {
        const id = new mongoose.Types.ObjectId();
        const status = 'init;'
        const result = await users.create({...data, id, status});
        return result;
    }

}
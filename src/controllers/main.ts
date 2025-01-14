import logger from '../configs/logger';
import {EExamplePost} from "../interfaces/interfaces";
import {EExampleEnum} from "../enums/enums";

export default class Main {
    constructor() {
    }

    mainFunction(num: number) {
        logger.info(`[main_controller](mainFunction)Main function, number: ${num} and also ${num + 1}`);
        return `Main function, number: ${num} and also ${num + 1}`;
    }

    calculate(data: EExamplePost) {
        const { num1, num2 } = data;
        logger.info(`[main_controller](calculate) hello ${EExampleEnum.MAOR} examplePost function, num1: ${num1}, num2: ${num2} and result: ${num1 + num2}`);
        return `examplePost function, num1: ${num1}, num2: ${num2} and result: ${num1 + num2}`;
    }

}
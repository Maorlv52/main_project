import logger from '../configs/logger';

export default class Main {
    constructor() {
    }

    mainFunction(num: number) {
        logger.info(`[main_controller](mainFunction)Main function, number: ${num} and also ${num + 1}`);
        return `Main function, number: ${num} and also ${num + 1}`;
    }

    calculate(num1: number, num2: number) {
        logger.info(`[main_controller](calculate)Calculate function, num1: ${num1}, num2: ${num2} and result: ${num1 + num2}`);
        return `Calculate function, num1: ${num1}, num2: ${num2} and result: ${num1 + num2}`;
    }

}
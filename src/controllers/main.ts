import logger from '../configs/logger';

export default class Main {
    constructor() {
        console.log('Main constructor');
    }

    mainFunction(num: number) {
        logger.info(`Main function, number: ${num} and also ${num + 1}`);
        return `Main function, number: ${num} and also ${num + 1}`;
    }

}
export default class Main {
    constructor() {
        console.log('Main constructor');
    }

    mainFunction(num: number) {
        return `Main function, number: ${num} and also ${num + 1}`;
    }

}
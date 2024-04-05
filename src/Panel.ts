export class Panel {
    #turn: number;
    #wordLetters: number;

    constructor(turn: number, wordLetters: number) {
        this.#turn = turn;
        this.#wordLetters = wordLetters;
    }

    get turn(): number {
        return this.#turn;
    }

    set turn(value: number) {
        this.#turn = value;
    }

    get wordLetters(): number {
        return this.#wordLetters;
    }

    set wordLetters(value: number) {
        this.#wordLetters = value;
    }
}


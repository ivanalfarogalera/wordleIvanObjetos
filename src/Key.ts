import { NewGame } from "./NewGame";

export abstract class Key {
    #code: string;
    #type: string;

    constructor(code: string, type: string) {
        this.#code = code;
        this.#type = type;
    }

    get code(): string {
        return this.#code;
    }

    set code(value: string) {
        this.#code = value;
    }

    get type(): string {
        return this.#type;
    }

    set type(value: string) {
        this.#type = value;
    }

    abstract keyPressed(game:NewGame): void;
}

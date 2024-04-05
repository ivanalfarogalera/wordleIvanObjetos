import { Key } from "./Key";
export class Keyboard {
    #keys: Key[];

    constructor(keys: Key[]) {
        this.#keys = keys;
    }

    get keys(): Key[] {
        return this.#keys;
    }

    set keys(value: Key[]) {
        this.#keys = value;
    }

    getKey(code: string): Key | null {
        for (let i = 0; i < this.#keys.length; i++) {
            if (this.#keys[i].code === code) {
                return this.#keys[i];
            }
        }
        return null;
    }
}

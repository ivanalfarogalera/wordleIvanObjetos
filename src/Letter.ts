import { Key } from "./Key";
export class Letter extends Key {
    constructor(code: string, type: string) {
        super(code, type);
    }

    keyPressed(): void {
        console.log("Presionaste la tecla de letra: " + this.code);
    }
}
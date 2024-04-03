"use strict";
class Letter {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    keyPressed(code) {
        let letter = code.split("y")[1];
        if (code == "Semicolon") {
            letter = "Ñ";
        }
    }
}

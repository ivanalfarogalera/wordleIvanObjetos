var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NewGame_pickedWord, _NewGame_actualWord, _NewGame_turn, _NewGame_actualPosition, _NewGame_userInterface;
import { MAX_WORD_SIZE, MAX_ATTEMPTS, validLetterCodes, spanishLetterN, codeSpanishLetterN, rightLetter, misplacedLetter } from "./env.js";
import { UIChanger } from "./UIChanger.js";
export class NewGame {
    constructor(pickedWord) {
        _NewGame_pickedWord.set(this, void 0);
        _NewGame_actualWord.set(this, void 0);
        _NewGame_turn.set(this, void 0);
        _NewGame_actualPosition.set(this, void 0);
        _NewGame_userInterface.set(this, void 0);
        this.updateBackgroundPosition = () => {
            let letterType = "";
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (__classPrivateFieldGet(this, _NewGame_pickedWord, "f")[i] == __classPrivateFieldGet(this, _NewGame_actualWord, "f")[i]) {
                    letterType = rightLetter;
                }
                else {
                    let pattern = new RegExp(__classPrivateFieldGet(this, _NewGame_actualWord, "f")[i], "g");
                    let numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _NewGame_pickedWord, "f").match(pattern) || []).length;
                    if (numberOfCoincidencesPickedWord != 0) {
                        letterType = misplacedLetter;
                    }
                }
                __classPrivateFieldGet(this, _NewGame_userInterface, "f").changeBackgroundPosition(__classPrivateFieldGet(this, _NewGame_turn, "f"), i, letterType);
                letterType = "";
            }
        };
        __classPrivateFieldSet(this, _NewGame_pickedWord, pickedWord, "f");
        __classPrivateFieldSet(this, _NewGame_actualWord, "", "f");
        __classPrivateFieldSet(this, _NewGame_turn, 1, "f");
        __classPrivateFieldSet(this, _NewGame_actualPosition, 0, "f");
        __classPrivateFieldSet(this, _NewGame_userInterface, new UIChanger(), "f");
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _NewGame_pickedWord, "f");
    }
    set pickedWord(word) {
        __classPrivateFieldSet(this, _NewGame_pickedWord, word, "f");
    }
    get actualWord() {
        return __classPrivateFieldGet(this, _NewGame_actualWord, "f");
    }
    set actualWord(word) {
        __classPrivateFieldSet(this, _NewGame_actualWord, word, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _NewGame_turn, "f");
    }
    set turn(num) {
        __classPrivateFieldSet(this, _NewGame_turn, num, "f");
    }
    get actualPosition() {
        return __classPrivateFieldGet(this, _NewGame_actualPosition, "f");
    }
    set actualPosition(num) {
        __classPrivateFieldSet(this, _NewGame_actualPosition, num, "f");
    }
    get interface() {
        return __classPrivateFieldGet(this, _NewGame_userInterface, "f");
    }
    set interface(i) {
        __classPrivateFieldSet(this, _NewGame_userInterface, i, "f");
    }
    startNewTurn() {
        this.updateBackgroundPosition();
        __classPrivateFieldSet(this, _NewGame_turn, __classPrivateFieldGet(this, _NewGame_turn, "f") + 1, "f");
        __classPrivateFieldSet(this, _NewGame_actualPosition, 0, "f");
        __classPrivateFieldSet(this, _NewGame_actualWord, "", "f");
    }
    checkGameOver() {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }
    checkGameWinner() {
        if (__classPrivateFieldGet(this, _NewGame_actualWord, "f") == __classPrivateFieldGet(this, _NewGame_pickedWord, "f")) {
            location.assign("/winner");
        }
    }
    enterPressed(code) {
        if (code == "Enter" && __classPrivateFieldGet(this, _NewGame_actualWord, "f").length == MAX_WORD_SIZE) {
            this.checkGameWinner();
            this.checkGameOver();
            this.startNewTurn();
        }
    }
    backspacePressed(code) {
        if (code == "Backspace" && __classPrivateFieldGet(this, _NewGame_actualPosition, "f") > 0) {
            __classPrivateFieldSet(this, _NewGame_actualPosition, __classPrivateFieldGet(this, _NewGame_actualPosition, "f") - 1, "f");
            __classPrivateFieldSet(this, _NewGame_actualWord, __classPrivateFieldGet(this, _NewGame_actualWord, "f").substring(0, __classPrivateFieldGet(this, _NewGame_actualWord, "f").length - 1), "f");
            __classPrivateFieldGet(this, _NewGame_userInterface, "f").deleteLetter(__classPrivateFieldGet(this, _NewGame_turn, "f"), __classPrivateFieldGet(this, _NewGame_actualPosition, "f"));
        }
    }
    addLetterToActualWord(code) {
        if (validLetterCodes.includes(code) && (__classPrivateFieldGet(this, _NewGame_actualPosition, "f") < MAX_WORD_SIZE)) {
            __classPrivateFieldGet(this, _NewGame_userInterface, "f").changeBackgroundKey(code);
            let letter = code.split("y")[1];
            if (code == codeSpanishLetterN) {
                letter = spanishLetterN;
            }
            __classPrivateFieldGet(this, _NewGame_userInterface, "f").setNewLetter(this.turn, this.actualPosition, letter);
            __classPrivateFieldSet(this, _NewGame_actualPosition, __classPrivateFieldGet(this, _NewGame_actualPosition, "f") + 1, "f");
            __classPrivateFieldSet(this, _NewGame_actualWord, __classPrivateFieldGet(this, _NewGame_actualWord, "f") + letter, "f");
        }
    }
    newKeyPressed(code) {
        this.addLetterToActualWord(code);
        this.enterPressed(code);
        this.backspacePressed(code);
    }
}
_NewGame_pickedWord = new WeakMap(), _NewGame_actualWord = new WeakMap(), _NewGame_turn = new WeakMap(), _NewGame_actualPosition = new WeakMap(), _NewGame_userInterface = new WeakMap();

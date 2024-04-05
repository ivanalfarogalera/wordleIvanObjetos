import { Enter } from "./Enter";
import { Backspace } from "./Backspace";
import { Letter } from "./Letter";
import { Key } from "./Key";
import { Keyboard } from "./Keyboard";
import { Panel } from "./Panel";

export const MAX_WORD_SIZE:number = 5;
export const MAX_ATTEMPTS:number = 6;

export const NewPanel:Panel = new Panel(0, 1);

export const codeSpanishLetterN: string="Semicolon";
export const spanishLetterN="Ñ";
export const validLetterCodes: string[] = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
export const rightLetter:string="rightLetter";
export const wrongLetter:string="wrongLetter";
export const misplacedLetter:string="misplacedLetter";

export const keys: Key[] = [
    new Enter("Enter", "Enter"),
    new Backspace("Backspace", "Delete"),
    new Letter("KeyQ", "Q"),
    new Letter("KeyW", "W"),
    new Letter("KeyE", "E"),
    new Letter("KeyR", "R"),
    new Letter("KeyT", "T"),
    new Letter("KeyY", "Y"),
    new Letter("KeyU", "U"),
    new Letter("KeyI", "I"),
    new Letter("KeyO", "O"),
    new Letter("KeyP", "P"),
    new Letter("KeyA", "A"),
    new Letter("KeyS", "S"),
    new Letter("KeyD", "D"),
    new Letter("KeyF", "F"),
    new Letter("KeyG", "G"),
    new Letter("KeyH", "H"),
    new Letter("KeyJ", "J"),
    new Letter("KeyK", "K"),
    new Letter("KeyL", "L"),
    new Letter("KeyZ", "Z"),
    new Letter("KeyX", "X"),
    new Letter("KeyC", "C"),
    new Letter("KeyV", "V"),
    new Letter("KeyB", "B"),
    new Letter("KeyN", "N"),
    new Letter("KeyM", "M"),
    new Letter("Semicolon", "Ñ")
];

export const keyboard: Keyboard=new Keyboard(keys);
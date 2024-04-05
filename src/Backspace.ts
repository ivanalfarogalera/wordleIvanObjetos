import { Key } from "./Key";
import { NewGame } from "./NewGame";
import { MAX_ATTEMPTS, MAX_WORD_SIZE,rightLetter, misplacedLetter } from "./env";
export class Backspace extends Key {
    constructor(code: string, type: string) {
        super(code, type);
    }

    keyPressed(game:NewGame): void {
        if(game.panel.wordLetters>0){
            game.panel.wordLetters -=1;
            game.actualWord=game.actualWord.substring(0, game.actualWord.length - 1);
            game.userInterface.deleteLetter(game.panel.turn, game.panel.wordLetters);
        }
    }
}
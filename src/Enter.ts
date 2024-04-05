import { Key } from "./Key";
import { NewGame } from "./NewGame";
import { MAX_ATTEMPTS, MAX_WORD_SIZE,rightLetter, misplacedLetter } from "./env";
export class Enter extends Key {
    constructor(code: string, type: string) {
        super(code, type);
    }

    keyPressed(game: NewGame): void {
        this.checkGameWinner(game);
        this.checkGameOver(game);
        this.startNewTurn(game);
    }

    startNewTurn(game: NewGame):void{
        this.updateBackgroundPosition
        game.panel.turn+= 1;
        game.panel.wordLetters = 0;
        game.actualWord = "";
    }

    checkGameOver(game:NewGame):void{
        if (game.panel.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    checkGameWinner(game:NewGame):void{
        if (game.actualWord == game.pickedWord){
            location.assign("/winner");
        }
    }

    updateBackgroundPosition(game:NewGame):void{
        let letterType:string="";
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (game.pickedWord[i]==game.actualWord[i]){
                letterType=rightLetter;
            }else{
                let pattern:RegExp = new RegExp(game.actualWord[i],"g");
                let numberOfCoincidencesPickedWord = (game.pickedWord.match(pattern)||[]).length;
                if (numberOfCoincidencesPickedWord != 0){
                    letterType=misplacedLetter;
                }
            }
            game.userInterface.changeBackgroundPosition(game.panel.turn, i, letterType);
            letterType="";
        }
    }
}
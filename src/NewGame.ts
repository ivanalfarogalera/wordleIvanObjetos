import {MAX_WORD_SIZE, MAX_ATTEMPTS, validLetterCodes, spanishLetterN} from "./env.js";
import {UIChanger} from "./UIChanger.js";

export class NewGame {
    #pickedWord: string
    #actualWord: string
    #turn: number
    #actualPosition: number
    #userInterface: UIChanger
    constructor(pickedWord: string){
        this.#pickedWord = pickedWord;
        this.#actualWord = "";
        this.#turn = 1;
        this.#actualPosition = 0;
        this.#userInterface = new UIChanger();
    }
    
    get pickedWord(){
        return this.#pickedWord;
    }
    set pickedWord(word){
        this.#pickedWord = word;
    }

    get actualWord(){
        return this.#actualWord;
    }
    set actualWord(word){
        this.#actualWord = word;
    }

    get turn(){
        return this.#turn;
    }
    set turn(num){
        this.#turn = num;
    }

    get actualPosition(){
        return this.#actualPosition;
    }
    set actualPosition(num){
        this.#actualPosition = num;
    }

    get interface() {
        return this.#userInterface;
    }
    set interface(i) {
        this.#userInterface = i;
    }

    updateBackgroundPosition=():void=>{
        let letterType:string="";
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.#pickedWord[i]==this.#actualWord[i]){
                letterType="rightLetter";
            }else{
                let pattern:RegExp = new RegExp(this.#actualWord[i],"g");
                let numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
                if (numberOfCoincidencesPickedWord==0){
                    letterType="wrongLetter";
                }else{
                    letterType="misplacedLetter";
                }
            }
            this.#userInterface.changeBackgroundPosition(this.#turn, i, letterType);
        }
    }

    startNewTurn():void{
        this.updateBackgroundPosition();
        this.#turn = this.#turn + 1;
        this.#actualPosition = 0;
        this.#actualWord = "";
    }

    checkGameOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    checkGameWinner():void{
        if (this.#actualWord == this.#pickedWord){
            location.assign("/winner");
        }
    }

    enterPressed(code:String):void{
        if (code=="Enter" && this.#actualWord.length == MAX_WORD_SIZE){
            this.checkGameWinner();
            this.checkGameOver();
            this.startNewTurn();
        }
    }

    backspacePressed(code:String):void{
        if (code=="Backspace" && this.#actualPosition > 0) {
            this.#actualPosition -= 1;
            this.#userInterface.deleteLetter(this.#turn, this.#actualPosition);
        }
    }

    addLetterToActualWord(code: string):void{ 
        if(validLetterCodes.includes(code) && (this.#actualPosition < MAX_WORD_SIZE)){
            this.#userInterface.changeBackgroundKey(code);
            let letter: string = code.split("y")[1];
            if (code==spanishLetterN){
                letter = "Ñ";
            }
            this.#userInterface.setNewLetter(this.turn, this.actualPosition, letter);
            this.#actualPosition = this.#actualPosition + 1;
            this.#actualWord += letter;
        }
    }

    newKeyPressed(code: string):void{ 
        this.addLetterToActualWord(code);
        this.enterPressed(code);
        this.backspacePressed(code);
    }
}
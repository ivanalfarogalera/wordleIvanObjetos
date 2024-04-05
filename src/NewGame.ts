import {MAX_WORD_SIZE, MAX_ATTEMPTS, validLetterCodes, spanishLetterN, codeSpanishLetterN, rightLetter, wrongLetter, misplacedLetter, keyboard, panel, NewPanel} from "./env.js";
import { Keyboard } from "./Keyboard.js";
import { Panel } from "./Panel.js";
import {UIChanger} from "./UIChanger.js";

export class NewGame {
    #pickedWord: string
    #actualWord: string
    #userInterface: UIChanger
    #panel: Panel
    #keyboard: Keyboard

    //constructor(pickedWord: string){
    //    this.#pickedWord = pickedWord;
    //    this.#actualWord = "";
    //    this.#turn = 1;
    //    this.#actualPosition = 0;
    //    this.#userInterface = new UIChanger();
    //}
    constructor(pickedWord: string) {
        this.#pickedWord = pickedWord;
        this.#actualWord = "";
        this.#userInterface = new UIChanger();
        this.#panel = NewPanel;
        this.#keyboard = keyboard;
    }

    get pickedWord(): string {
        return this.#pickedWord;
    }

    set pickedWord(value: string) {
        this.#pickedWord = value;
    }

    get actualWord(): string {
        return this.#actualWord;
    }

    set actualWord(value: string) {
        this.#actualWord = value;
    }

    get userInterface(): UIChanger {
        return this.#userInterface;
    }

    set userInterface(value: UIChanger) {
        this.#userInterface = value;
    }

    get panel(): Panel {
        return this.#panel;
    }

    set panel(value: Panel) {
        this.#panel = value;
    }

    get keyboard(): Keyboard {
        return this.#keyboard;
    }

    set keyboard(value: Keyboard) {
        this.#keyboard = value;
    }



    updateBackgroundPosition=():void=>{
        let letterType:string="";
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.#pickedWord[i]==this.#actualWord[i]){
                letterType=rightLetter;
            }else{
                let pattern:RegExp = new RegExp(this.#actualWord[i],"g");
                let numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
                if (numberOfCoincidencesPickedWord != 0){
                    letterType=misplacedLetter;
                }
            }
            this.#userInterface.changeBackgroundPosition(this.#turn, i, letterType);
            letterType="";
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
            this.#actualWord = this.#actualWord.substring(0, this.#actualWord.length - 1);
            this.#userInterface.deleteLetter(this.#turn, this.#actualPosition);
        }
    }

    addLetterToActualWord(code: string):void{ 
        if(validLetterCodes.includes(code) && (this.#actualPosition < MAX_WORD_SIZE)){
            this.#userInterface.changeBackgroundKey(code);
            let letter: string = code.split("y")[1];
            if (code==codeSpanishLetterN){
                letter = spanishLetterN;
            }
            this.#userInterface.setNewLetter(this.turn, this.actualPosition, letter);
            this.#actualPosition = this.#actualPosition + 1;
            this.#actualWord += letter;
        }
    }

    //newKeyPressed(code: string):void{ 
    //    this.addLetterToActualWord(code);
    //    this.enterPressed(code);
    //    this.backspacePressed(code);
    //}

    newKeyPressed(code: string):string | undefined{
        return this.keyboard.getKey(code)?.type;
    }


}
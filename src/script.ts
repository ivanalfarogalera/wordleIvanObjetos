import {NewGame} from "./NewGame.js";

const wordsCollection: string[]= ["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"];
const pickedWord: string = wordsCollection[Math.trunc(Math.random() * (wordsCollection.length + 1))];
console.log(pickedWord);

const game: NewGame = new NewGame(pickedWord);

Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    game.keyboard.getKey((<HTMLButtonElement>e.target).value)?.keyPressed;
    //game.newKeyPressed((<HTMLButtonElement>e.target).value);
}));

document.addEventListener("keydown", (e)=>{
    game.keyboard.getKey(e.code)?.keyPressed;
    //game.newKeyPressed(e.code);
});
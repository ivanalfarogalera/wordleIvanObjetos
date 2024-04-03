import { NewGame } from "./NewGame.js";
const wordsCollection = ["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"];
const pickedWord = wordsCollection[Math.trunc(Math.random() * (wordsCollection.length + 1))];
console.log(pickedWord);
const game = new NewGame(pickedWord);
Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {
    game.newKeyPressed(e.target.value);
}));
document.addEventListener("keydown", (e) => {
    game.newKeyPressed(e.code);
});

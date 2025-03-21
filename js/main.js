import { Fighter, ChampionFighter } from './modules/Fighter.js';

// UI Interaction
document.querySelector("#addFighter").addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let wins = document.querySelector("#wins").value;
    let losses = document.querySelector("#losses").value;

    if (name && age && wins && losses) {
        let newFighter;
        if (wins > 20) {
            newFighter = new ChampionFighter(name, age, wins, losses, Math.floor(wins / 5));
        } else {
            newFighter = new Fighter(name, age, wins, losses);
        }

        document.querySelector("#fightersContainer").innerHTML += newFighter.displayFighter();
    }
});
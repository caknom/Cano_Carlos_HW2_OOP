export class Fighter {
    constructor(name, age, wins, losses) {
        this.name = name;
        this.age = age;
        this.wins = wins;
        this.losses = losses;
    }

    getRecord() {
        return `${this.wins} Wins - ${this.losses} Losses`;
    }

    displayFighter() {
        return `<div class="fighter-card">
                    <h3>${this.name} (Age: ${this.age})</h3>
                    <p>Record: ${this.getRecord()}</p>
                </div>`;
    }
}

export class ChampionFighter extends Fighter {
    constructor(name, age, wins, losses, beltTitles) {
        super(name, age, wins, losses);
        this.beltTitles = beltTitles;
    }

    getRecord() {
        return `${super.getRecord()} | ${this.beltTitles} Titles`;
    }

    displayFighter() {
        return `<div class="fighter-card-champ">
                    <h3>🥇 Champion: ${this.name} (Age: ${this.age})</h3>
                    <p>Record: ${this.getRecord()}</p>
                </div>`;
    }
}
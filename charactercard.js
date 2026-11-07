console.log(".js loaded")

// Create a character card with: properties: name, class, level, health, and image and methods: attacked and levelUp

const character = {
    level: 5,
    health: 100,
    levelUp: function(character) {
        this.level += 1;
    },
    takeDamage: function(character) {
        this.health -= 20;
        if (this.health <= 0) {
            alert("Your character has died!");
            resetCharacter();
        }
    }
}

const levelElement = document.querySelector("#level");
const healthElement = document.querySelector("#health");

function updateCharacterDisplay() {
    levelElement.textContent = character.level;
    healthElement.textContent = character.health;
}

function resetCharacter() {
    character.health = 100;
    character.level = 5;
}

document.querySelector("#attacked").addEventListener("click", e => {
    console.log("attack button clicked");
    character.takeDamage();
    console.log(character.health);
    updateCharacterDisplay()
});

document.querySelector("#levelUp").addEventListener("click", e => {
    console.log("level up button clicked");
    character.levelUp();
    console.log(character.level);
    updateCharacterDisplay()
});

resetCharacter();
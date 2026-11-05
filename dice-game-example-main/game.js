console.log(".js loaded")
console.log(Math.floor(Math.random() * 6))

// 1. click da button
document.querySelector('#rollButton').addEventListener("click", e => {
    // 2. roll the die
    setDieImages("assets/die_rolling.gif")
    // 3. land on new number
    setTimeout(() => {
        // this creates a new function that will for the time frame listed below
        setDieImages("assets/white_dice_1.gif");
        document.querySelectorAll('#gameboard img').forEach(image => {
            const random_die = Math.ceil(Math.random() * 6)
            image.src = `assets/white_dice_${random_die}.gif`;
        });
    }, 1000);
});

function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = imagePath
    });
}

function setRandomDieImages() {

}
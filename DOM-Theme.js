// 1. Functions

// create function
function nameOfFunction() {
    console.log("We fire the whole [lemon!] That's 65% more [LEMON!!] per [ L E M O N S ! ! ! ]");
}
// call function
nameOfFunction();

function logName(name) {
    console.log(name);
}

logName(name);

function changeThemeOld(event) {
    console.log(event)
}

// 2. Event Listeners (things triggered by the user)
    
//grab element from DOM to listen to
let selectBox = document.querySelector("#theme-select");

//register event listener on element
// EventListener(*event*, *function*)
selectBox.addEventListener("change", changeThemeOld);

// 3. If Statements



let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          
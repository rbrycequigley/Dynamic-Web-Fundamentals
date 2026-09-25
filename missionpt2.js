console.log("L E M O N S ! ! !")

// code that makes the function function
let selectBox = document.querySelector("#theme-select");
selectBox.addEventListener("change", LightDark);
let selectElem = document.querySelector('#theme-select');
selectElem.addEventListener('change', LightDark);

// <img src="https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp" alt="byui-logo">

// functioning function
function LightDark() {
    let mode = selectElem.value;
    const byui_logo = document.querySelector("#byui-logo img");

    console.log("mode =", mode);
    console.log("before:", byui_logo.src);

    if (mode == "light") {
        console.log("change to light");
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        byui_logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
    }
    else if (mode == "dark") {
        console.log("change to dark");
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        byui_logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
    }

    console.log("after:", byui_logo.src);
}
//
document.querySelector("h1") //any CSS selector can be put into a .querySelector()

let heading = document.querySelector("h1") //query selectors can also be saved as variables

console.log(heading)

//.style retrieves css information and can modify it
heading.style.color = "blue";

let body = document.querySelector("body");
body.style.color ="light gray";

document.querySelector("p").style.color = "red";

// different ways to select from DOM
document.getElementById("topics");

// can select multiple elements
console.log(document.querySelectorAll(".list"));

// apply a class to an element

let topicsClassList = document.querySelector("#topics").classList;

topicsClasasList.add("special");

//toggle effects (it's just a .js if statement)

topicsClassList.toggle("special")
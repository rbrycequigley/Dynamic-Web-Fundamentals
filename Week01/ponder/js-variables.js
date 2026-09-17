// let creates a variable of any kind
let age = 33;
let name = "John Programming";
let favoriteColor = "Blue";

//console.log is print() or Console.Print()
console.log(age);
//age of 33 can be viewed on the website by inspecting and going to console
age = 34;

console.log(age);
//age of 34 will now be seen in website inspection console because it's been updated by this declare

const eyeColor = "blue";
// const variables cannot be changed later

//scope is where variables can be referenced
//if statement example. This enters into a different scope
if(age == 34) { 
    //inside this scope we can declare variables outside the scope
    console.log(name);

    let fruit = banana
    // because this variable was declared inside this scope, it cannot be used outside this scope
    // this is useful for conserving processing power
    // if a variable is declared outside a scope then modified inside another, that is ok
}

// how to pull from the html page
document.querySelector("h1").style.color = favoriteColor;
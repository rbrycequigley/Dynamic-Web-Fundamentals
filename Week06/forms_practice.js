// -------------------------------- Step 1: grab input -------------------------------- //

// grabbing the form elements from the fsyForm
const form = document.querySelector("#fsyForm");

// grabbing the user input from the form
console.log(form.firstName);
// this is nice but doesn't account for the user actually submitting the form

form.addEventListener('submit', (event) => {
    //                'change' will automatically update new information
    // prevents a blank form from being inputted
    event.preventDefault();
    //grabs the first name of whoever filled out the form
    console.log(form.firstName.value);
    //grabs the email of whoever filled out the form
    console.log(form.email.value);
})
console.log(".js loaded")
const form = document.querySelector("#ticketForm");

const ticketType = document.querySelector("#ticketType");

// variables for 'Student #'
const studentContainer = document.querySelector("#studentContainer");
const studentNumber = document.querySelector("#studentNumber");

// variables for 'Guest'
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const accessCode = document.querySelector("#accessCode");

const output = document.querySelector("#output");

const availableDate = form.availableDate.value;

function updateTicketFields() {

  const value = ticketType.value;

  console.log("Ticket selection changed:", value);

  // Default: Choose one
  if (value === "") {
    studentContainer.hidden = true;
    accessCodeContainer.hidden = true;
    studentNumber.required = false;
    accessCode.required = false;

    // Student selected
  } else if (value === "student") {
    studentContainer.hidden = false;
    accessCodeContainer.hidden = true;

    studentNumber.required = true;
    accessCode.required = false;

    console.log("Student selected");

  // Guest selected
  } else if (value === "guest") {
    studentContainer.hidden = true;
    accessCodeContainer.hidden = false;

    studentNumber.required = false;
    accessCode.required = true;

    console.log("Guest selected");
  }

  console.log("Student container hidden:", studentContainer.hidden);
  console.log("Access code container hidden:", accessCodeContainer.hidden);
}

ticketType.addEventListener("change", updateTicketFields);

updateTicketFields();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const value = ticketType.value;
  const availableDate = form.availableDate.value;
  

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  if (value === "guest" && accessCode.value.trim() !== "EVENT131") {
    output.textContent = "Please enter a correct access code (check your ticket for the correct one)."
    return;
  }

  if (value === "student" && studentNumber.value.trim().length !== 7) {
    output.textContent = "Please enter a correct student ID (it should be 7 numbers long)."
    return;
  }

  console.log(availableDate)

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${value}</p>
  <p>${availableDate}</p>
  `;

  form.reset();
});    
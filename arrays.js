// arrays in js
let courses = ["math", "science", "lemons", "english", "mugrootbeer"];

//display the first item in array
console.log(courses[0]);
//display last item
console.log(courses[3]);

// ------------------- array methods ------------------- //
// 'forEach' applies a function to every item within the array
courses.forEach((item) => {
    console.log(item)
}) 

// normal i loop
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i])
}

// making an object
let course = {
    name: "web dev",
    code: "wd131",
    credits: 3,
    insturctor: "Bro Warner"
}

console.log(course.instructor);

// array of objects (creates three objects stored within the array)
let course_array = [
    {
    name: "web dev",
    code: "wd131",
    credits: 3,
    insturctor: "Bro Warner"
    },
    {
    name: "web fun",
    code: "wd130",
    credits: 2,
    insturctor: "Bro Warner"
    },
    {
    name: "intro to programming",
    code: "cs101",
    credits: 3,
    insturctor: "Bro Warner"
    }  
]

// Challenge: Print out the name and code of the second course in this array
console.log(course_array[1].name);
console.log(course_array[1].code);

// Template Literals
let body = document.querySelector('body');

course_array.forEach((course) => {
    // builds out three HTML div sections with the course elements
    let courseDiv = `
    <div>
        <h2>${course.name}</h2>
        <p>Code: ${course.code}</p>
        <p>Credits: ${course.credits}</p>
        <p>Instructor: ${course.instructor}</p>
    </div>
    `;
    // add new sections to the body
    body.innerHTML += courseDiv;
})

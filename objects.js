console.log("loaded js")

// object creation

const aCourse = {
    code: "WDD131",
    name: "Dynamic Web Fundamentals",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 31,
            days: 'TTh',
            instructor: "Brother Thompson"
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: "Sister Anderson"
        }
    ],
    enrollStudent: function(sectionNumber) {
        // find the correct section in the array based on the sectionNumber passed in\
        // ('this' is a quick method of self-referring to an object. Only works inside an object)
        this.sections.forEach(section => {
            if(section.sectionNum == sectionNumber) {
                // increment rollment of that section by 1
                section.enrolled += 1;
                console.log("section updated to: " + section.enrolled)
            }
        });
        renderSections(this.sections);
    }

} // end of aCourse object definition

//console log second sections instructor
console.log(aCourse.sections[1].instructor)

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
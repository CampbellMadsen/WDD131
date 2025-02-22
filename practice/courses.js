// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function(sectionNum) {
        console.log(sectionNum);
        console.log(sections);
    }
};
function setCourseInfo(course) {
    courseName = document.querySelector("#courseName");
    courseCode = document.querySelector("#courseCode");
    courseName.textcontent = course.name;
    courseCode.textcontent = course.code;
}
function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`
}
function renderSections(sections) {
    const sectionList = document.querySelector("#sections");
    sectionList.innerHTML = "";
    const html = sections.map(sectionTemplate);
    sectionList.innerHTML = html.join("")
}
setCourseInfo(aCourse);
renderSections(aCourse.sections)
document.querySelector("#enrollStudent").addEventListener('click', function() {
    aCourse.enrollStudent(1);
})
//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grades = ['A', 'B', 'A'];
function getGPA(grade) {
    let points = 0;
    if (grade == "A") {
        points = 4;
    } else {
        points = 3
    }
    return points;
}
const GPAPoints = grades.map(getGPA);
const GPATotal = GPAPoints.reduce(function(total, item){
    return total + item;
});
const GPA = GPATotal / GPAPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruits.filter((word) => word.length < 6)
const numbers = [12, 34, 21, 54];
const luckyNumber=12;
let luckyIndex = numbers.indexOf(luckyNumber)
var courseNameInput = document.getElementById("courseName");
var courseCategoryInput = document.getElementById("courseCategory");
var coursePriceInput = document.getElementById("coursePrice");
var courseDescriptionInput = document.getElementById("courseDescription");
var addBtn = document.getElementById("click");
var clearBtn = document.getElementById("clear");
var deleteCourse = document.getElementById("delete");
var data = document.getElementById("data");
var courses = [];
addBtn.onclick = function () {
    addCourse();
    displayData();
}
clearBtn.onclick = function () {
    clearCourse();
    displayData();
}

function addCourse() {
    var course = {
        name: courseNameInput.value,
        caregory: courseCategoryInput.value,
        price: coursePriceInput.value,
        desc: courseDescriptionInput.value
    }
    courses.push(course);
}
function displayData() {
    var result = "";
    for (var i = 0; i < courses.length; i++) {
        result += "<tr><td>" + i + "</td><td>" + courses[i].name +
            "</td > <td>" + courses[i].caregory + "</td><td>" + courses[i].price +
            "</td><td> " + courses[i].desc + "</td><td></td><td></td></tr>"
    }
    data.innerHTML = result;
}
function clearCourse() {
    courses.pop(courses);
}

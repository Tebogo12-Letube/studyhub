document.getElementById("courseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const courseTitle = document.getElementById("courseTitle").value;
    const courseMaterials = document.getElementById("courseMaterials").value;

    if (courseTitle) {
        let courses = JSON.parse(localStorage.getItem("courses")) || [];
        courses.push({ title: courseTitle, materials: courseMaterials });
        localStorage.setItem("courses", JSON.stringify(courses));

        displayCourses();
        document.getElementById("courseTitle").value = "";
        document.getElementById("courseMaterials").value = "";
    }
});

function displayCourses() {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";

    courses.forEach((course, index) => {
        courseList.innerHTML += `<li><strong>${course.title}</strong><br>${course.materials}</li>`;
    });
}

// Load courses on page load
document.addEventListener("DOMContentLoaded", displayCourses);

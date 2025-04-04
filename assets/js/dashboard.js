document.addEventListener("DOMContentLoaded", function() {
    console.log("Dashboard loaded successfully!");
});

// Optional logout function (only if login exists)
function logout() {
    sessionStorage.removeItem("user");
    alert("You have been logged out.");
}

document.addEventListener("DOMContentLoaded", function() {
    const role = sessionStorage.getItem("role");

    if (role === "admin") {
        document.body.innerHTML += "<h2>Welcome, Admin!</h2>";
        document.body.innerHTML += "<button onclick='adminPanel()'>Go to Admin Panel</button>";
    }
});

function adminPanel() {
    window.location.href = "admin-dashboard.html";
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Student dashboard loaded successfully!");
});

// Example study progress system
let progress = {
    lessonsCompleted: 4,
    totalLessons: 10,
    studyTime: "2h 30m"
};

function startQuiz() {
    window.location.href = "quizzes.html"; // Redirect to quiz page
}

function logout() {
    sessionStorage.removeItem("user");
    alert("You have been logged out.");
    window.location.href = "login.html";
}

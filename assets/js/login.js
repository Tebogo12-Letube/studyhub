document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        sessionStorage.setItem("user", username);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginStatus").innerText = "Invalid login credentials. Try again!";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "securepass") {
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("role", "admin"); // Set admin role
        window.location.href = "admin-dashboard.html"; // Redirect admin
    } else if (username === "user" && password === "1234") {
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("role", "user"); // Set user role
        window.location.href = "dashboard.html"; // Redirect normal user
    } else {
        document.getElementById("loginStatus").innerText = "Invalid credentials!";
    }
});

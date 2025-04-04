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

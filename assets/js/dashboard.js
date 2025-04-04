document.addEventListener("DOMContentLoaded", function() {
    const user = sessionStorage.getItem("user");
    if (!user) {
        window.location.href = "login.html";
    }
});

function logout() {
    sessionStorage.removeItem("user");
    window.location.href = "login.html";
}

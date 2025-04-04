document.addEventListener("DOMContentLoaded", function() {
    console.log("Dashboard loaded successfully!");
});

// Optional logout function (only if login exists)
function logout() {
    sessionStorage.removeItem("user");
    alert("You have been logged out.");
}

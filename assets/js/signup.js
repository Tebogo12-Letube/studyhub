document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    if (newUsername && newPassword) {
        // Store student account in localStorage
        localStorage.setItem(newUsername, newPassword);
        document.getElementById("signupStatus").innerText = "Account created! You can now log in.";
    } else {
        document.getElementById("signupStatus").innerText = "Please fill in all fields.";
    }
});

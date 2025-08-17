```javascript
// Contact Form Validation Script
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        let valid = true;
        errorMessage.textContent = ""; // Clear previous error message

        // Validate name
        if (nameInput.value.trim() === "") {
            valid = false;
            errorMessage.textContent += "Name is required. ";
        }

        // Validate email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(emailInput.value)) {
            valid = false;
            errorMessage.textContent += "Please enter a valid email address. ";
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            valid = false;
            errorMessage.textContent += "Message cannot be empty. ";
        }

        // Prevent form submission if invalid
        if (!valid) {
            event.preventDefault();
        }
    });
});
```
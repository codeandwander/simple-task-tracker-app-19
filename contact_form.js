```javascript
// Import EmailJS SDK
import emailjs from 'emailjs-com';

// Function to send email
const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(e.target);
    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
        .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
            alert('Email sent successfully!');
        })
        .catch((error) => {
            console.error('Failed to send email.', error);
            alert('Error sending email. Please try again later.');
        });
};

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', sendEmail);
```
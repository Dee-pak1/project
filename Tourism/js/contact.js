function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill out all required fields (Name, Email, Message).");
        return;
    }

    // Email format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone number validation (optional)
    if (phone && !/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // If validation passes, process form submission
    console.log("Form submitted with:", { name, email, phone, subject, message });
    alert("Thank you for your message! We will get back to you soon.");

    // Reset the form
    document.querySelector('.contact-form form').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded");

    // Attach form submit event listener
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', validateForm);
    } else {
        console.error("Form not found!");
    }
});

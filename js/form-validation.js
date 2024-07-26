document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('messageError').textContent = '';
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Email is invalid.';
        isValid = false;
    }
    
    // Validate mobile
    if (mobile === '') {
        document.getElementById('mobileError').textContent = 'Mobile number is required.';
        isValid = false;
    } else if (!/^\d+$/.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number is invalid.';
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
        // You can submit the form here using AJAX or any other method if needed
        // For example, using fetch or XMLHttpRequest
        // form.submit();
    }
});

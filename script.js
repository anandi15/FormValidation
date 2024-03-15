document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Reset error messages
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Retrieve form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    let isValid = true;

    if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent = 'Name must be at least 5 characters';
        isValid = false;
    }

    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        isValid = false;
    }

    if (phone === '123456789' || phone.length !== 10) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
        isValid = false;
    }

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').textContent = 'Password is not strong';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').classList.remove('hidden');
    }
});

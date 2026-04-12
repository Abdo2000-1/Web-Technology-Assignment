// ==========================
// Password Toggle
// ==========================

const passwordInput = document.getElementById('password');

if (passwordInput) {

    passwordInput.style.paddingRight = '35px';
    passwordInput.style.boxSizing = 'border-box';

    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';
    wrapper.style.width = '100%';

    passwordInput.parentNode.insertBefore(wrapper, passwordInput);
    wrapper.appendChild(passwordInput);

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.textContent = '👁️';

    toggleButton.style.position = 'absolute';
    toggleButton.style.right = '8px';
    toggleButton.style.top = '50%';
    toggleButton.style.transform = 'translateY(-50%)';
    toggleButton.style.background = 'none';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.fontSize = '18px';

    wrapper.appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
}


// ==========================
// Login Logic
// ==========================

const form = document.getElementById('sign-in');

if (form) {

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // ======================
        // Validation
        // ======================

        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        // ======================
        // LocalStorage
        // ======================

        let users = JSON.parse(localStorage.getItem('usersData')) || [];

        if (users.length === 0) {
            alert('No users found. Please sign up first.');
            return;
        }

        let validUser = users.find(user =>
            user.email === email && user.password === password
        );

        if (!validUser) {
            alert('Invalid Email or Password!');
            return;
        }

        // Save logged user
        localStorage.setItem('loggedInUser', JSON.stringify(validUser));

        // UI Feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerText = "Login Successful...";
        submitBtn.style.backgroundColor = "#28a745";
        submitBtn.disabled = true;

    
        // Redirect
        setTimeout(() => {

            if (validUser.role === 'admin') {
                window.location.href = "../homeAdmin.html";
            } else {
                window.location.href = "../homeUser.html";
            }

        }, 1200);

    });

}
// Password toggle functionality (inside the input)
const passwordInput = document.getElementById('password');

// Style the password input to make room for the toggle
passwordInput.style.paddingRight = '35px';
passwordInput.style.boxSizing = 'border-box';

// Create wrapper to position toggle inside input
const wrapper = document.createElement('div');
wrapper.style.position = 'relative';
wrapper.style.display = 'inline-block';
wrapper.style.width = '100%';
passwordInput.parentNode.insertBefore(wrapper, passwordInput);
wrapper.appendChild(passwordInput);

// Create toggle button
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
toggleButton.style.padding = '0';
wrapper.appendChild(toggleButton);

// Toggle password visibility
toggleButton.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Original form submission
document.getElementById('sign-in').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    console.log('Signing in with:', email, password);
    alert('Sign in attempted! Check console for details.');
});
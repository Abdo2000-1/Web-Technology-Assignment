
document.getElementById('admin').addEventListener('change', function() {
    document.getElementById('companyInput').style.display = 'block';
});

document.getElementById('user').addEventListener('change', function() {
    document.getElementById('companyInput').style.display = 'none';
});

document.getElementById('companyInput').style.display = 'none';


document.getElementById('confirm-password').addEventListener('input', function() {
    let pw = document.getElementById('password').value;
    if (this.value !== pw) {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = 'green';
    }
});


document.getElementById('toggleBothPw').addEventListener('click', function() {
    let pw = document.getElementById('password');
    let confirmPw = document.getElementById('confirm-password');
    
    if (pw.type === 'password') {
        pw.type = 'text';
        confirmPw.type = 'text';
        this.textContent = '🫣'; 
    } else {
        pw.type = 'password';
        confirmPw.type = 'password';
        this.textContent = '👁️'; 
    }
});

document.querySelector('form').addEventListener('submit', function(e) {
    
     let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let roleElement = document.querySelector('input[name="role"]:checked');

    if (!roleElement) {
        e.preventDefault();
        alert('Please select User or Admin');
        return;
    }

    let role = roleElement.value;
    let company = document.getElementById("companyInput").value;
    let phone = document.getElementById("phone").value;

    // Check passwords
    if (password !== confirmPassword) {
        e.preventDefault();
        alert('Passwords do not match!');
        return;
    }

    // Check company for admin
    if (role === 'admin' && company === '') {
        e.preventDefault();
        alert('Please enter your company name');
        return;
    }


    // ===============================
    // LocalStorage
    // ===============================

    let users = JSON.parse(localStorage.getItem('usersData')) || [];

    let userExists = users.some(u => u.email === email);

    if (userExists) {
        e.preventDefault();
        alert('This email is already registered!');
        return;
    }

    let newUser = {
        email: email,
        password: password,
        role: role,
        phone: phone,
        company: role === 'admin' ? company : null
    };

    users.push(newUser);
    localStorage.setItem('usersData', JSON.stringify(users));

    // UI feedback
    e.preventDefault(); 

    let submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.innerText = "Account Created Successfully!";
    submitBtn.style.backgroundColor = "#28a745";
    submitBtn.disabled = true;

    setTimeout(() => {
        window.location.href = "sign-in.html";
    }, 1500);
});
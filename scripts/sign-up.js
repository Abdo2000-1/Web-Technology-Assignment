
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
    
    e.preventDefault();

    if (!document.querySelector('input[name="role"]:checked')) {
        e.preventDefault();
        alert('Please select User or Admin');
        return;
    }
    
   
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        e.preventDefault();
        alert('Passwords do not match!');
        return;
    }
    
   
    let selectedRole = document.querySelector('input[name="role"]:checked').value;
    if (selectedRole === 'admin') {
        let companyName = document.getElementById('company').value.trim();
        if (companyName === '') {
            e.preventDefault();
            alert('Please enter your company name');
            return;
        }
    }




if (selectedRole === 'admin') {
    window.location.href = '../homeAdmin.html'; 
} else if (selectedRole === 'user') {
    window.location.href = '../homeUser.html'; 
}

});

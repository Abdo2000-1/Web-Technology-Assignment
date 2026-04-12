

function applyNavigationRole() {
  
    const storedUser = localStorage.getItem('loggedInUser');
    

    if (!storedUser) {
        console.warn("No logged-in user found.");
        return; 
    }

    const user = JSON.parse(storedUser);
  
    const adminNav = document.getElementById('Admin-Nav');
    const userNav = document.getElementById('User-Nav');

    if (user.role === 'admin') {
        if (adminNav) adminNav.style.display = 'block';
        if (userNav) userNav.style.display = 'none';
    } else {
        if (userNav) userNav.style.display = 'block';
        if (adminNav) adminNav.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', applyNavigationRole);
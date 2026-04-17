function applyNavigationRole() {
    const data = localStorage.getItem('loggedInUser');

    if (!data) return;

    const user = JSON.parse(data);


    const adminNav = document.getElementById('Admin-Nav');
    const userNav = document.getElementById('User-Nav');


    const isAdmin = user.role === 'admin';

    if (adminNav) adminNav.style.display = isAdmin ? 'block' : 'none';
    if (userNav) userNav.style.display = isAdmin ? 'none' : 'block';
}
document.addEventListener('DOMContentLoaded', applyNavigationRole);
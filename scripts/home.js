
// Error
document.addEventListener('DOMContentLoaded', function() {
    const lockedLinks = document.querySelectorAll('.not-signed-in');
    const modal = document.getElementById('customModal');
    const closeBtn = document.getElementById('closeModal');

  
    lockedLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            modal.style.display = 'flex'; 
        });
    });

    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
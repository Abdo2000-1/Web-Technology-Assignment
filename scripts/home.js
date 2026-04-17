// <!-- Error --> السطر اللي موجود في هتمل 156
document.addEventListener('DOMContentLoaded', () => {
    

    const modal = document.getElementById('customModal');
    document.onclick = (e) => {
        

        if (e.target.classList.contains('not-signed-in')) {
            e.preventDefault();
            modal.style.display = 'flex';
        }

        if (e.target.id === 'closeModal' || e.target === modal) {
            modal.style.display = 'none'; 
        }
    };
});
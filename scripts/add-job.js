function validateForm(event) {


   
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const company = document.getElementById('company').value.trim();
    const location = document.getElementById('location').value.trim();
    const salary = document.getElementById('salary').value.trim();
    const status = document.getElementById('status').value;
    const description = document.getElementById('description').value.trim();


    if (!jobTitle || !company || !location || !salary) {
        alert('Please fill in all mandatory fields!');
        return false;
    }

    if (isNaN(salary) || Number(salary) <= 0) {
        alert('Salary must be a valid positive number!');
        return false;
    }


    const newJob = {
        id: Date.now(),
        jobTitle,
        company,
        location,
        salary,
        status,
        description,
        dateAdded: new Date().toLocaleDateString()
    };

    
    const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];

    existingJobs.push(newJob);

    localStorage.setItem('jobs', JSON.stringify(existingJobs));

    alert('Job added successfully!');
    
    return true;
}
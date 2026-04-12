        function validateForm(event) {
            // Get all form fields
            const jobTitle = document.getElementById('jobTitle').value.trim();
            const company = document.getElementById('company').value.trim();
            const location = document.getElementById('location').value.trim();
            const salary = document.getElementById('salary').value.trim();
            
            // Check if any required field is empty
            if (!jobTitle) {
                alert('Job Title is mandatory!');
                event.preventDefault();
                return false;
            }
            
            if (!company) {
                alert('Company Name is mandatory!');
                event.preventDefault();
                return false;
            }
            
            if (!location) {
                alert('Location is mandatory!');
                event.preventDefault();
                return false;
            }
            
            if (!salary) {
                alert('Salary is mandatory and must be a number!');
                event.preventDefault();
                return false;
            }

              if (isNaN(salary) || salary <= 0) {
                alert('Salary must be a valid positive number!');
                event.preventDefault();
                return false;
            }
        
            alert('Job added successfully!');
            return true;
        }
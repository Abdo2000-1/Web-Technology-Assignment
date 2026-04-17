// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    renderAvailableJobs();
});

function renderAvailableJobs() {
    const container = document.getElementById("job-list-container");
    
    // Fetch jobs from local storage, default to empty array if none exist
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Clear the container
    container.innerHTML = "";

    if (jobs.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#777;'>No jobs are currently available. Check back later!</p>";
        return;
    }

    // Loop through each job and generate its HTML
    jobs.forEach((job, index) => {
        // Handle variations in status capitalization
        const statusStr = job.status ? job.status.toLowerCase() : "open";
        const isClosed = statusStr === "closed";
        
        const jobDiv = document.createElement("div");
        jobDiv.className = "job";
        jobDiv.style = "border:1px solid #ddd; padding:20px; margin-top:20px;";

        jobDiv.innerHTML = `
            <h3 style="${isClosed ? 'color:#777;' : ''}">${index + 1}. ${job.jobTitle}</h3>

            <p>
                <strong>Company:</strong> ${job.company} |
                <strong>Location:</strong> ${job.location} |
                <strong>Status:</strong>
                <span style="color:${isClosed ? 'red' : 'green'}; text-transform:capitalize;">${statusStr}</span>
            </p>

            <p style="${isClosed ? 'color:#777;' : ''}">
                ${job.description.substring(0, 120)}${job.description.length > 120 ? '...' : ''}
            </p>

            <button class="details-btn" onclick="toggleDetails(this)" style="cursor:pointer; background:none; border:none; color:#2da7c9; text-decoration:underline; font-size:16px; padding:0;">View Details</button>
            &nbsp;
            ${isClosed 
                ? `<button disabled style="padding:5px 10px; background:#ccc; border:none; border-radius:3px; cursor:not-allowed;">Closed</button>`
                : `<a href="apply.html?job=${encodeURIComponent(job.jobTitle)}" style="background:#2da7c9; color:white; padding:6px 12px; text-decoration:none; border-radius:3px; font-size:14px; display:inline-block;">Apply Now</a>`
            }

            <div class="details" style="display:none; margin-top:15px; padding-top:15px; border-top:1px dashed #ccc;">
                <p><strong>Full Description:</strong> ${job.description}</p>
                <p><strong>Salary:</strong> $${job.salary}</p>
                <p><strong>Date Added:</strong> ${job.dateAdded}</p>
            </div>
        `;

        container.appendChild(jobDiv);
    });
}

// Function to toggle the "View Details" section
function toggleDetails(btn) {
    const detailsDiv = btn.parentElement.querySelector('.details');
    if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
        detailsDiv.style.display = 'block';
        btn.innerText = 'Hide Details';
    } else {
        detailsDiv.style.display = 'none';
        btn.innerText = 'View Details';
    }
}
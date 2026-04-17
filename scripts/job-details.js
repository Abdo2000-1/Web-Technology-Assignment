let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

let container = document.getElementById("jobsContainer");

function renderJobs() {
    container.innerHTML = "";

    jobs.forEach((job, index) => {

        let jobDiv = document.createElement("div");
        jobDiv.classList.add("job");
        jobDiv.innerHTML = `
            <h3>${index + 1}. ${job.jobTitle}</h3>

            <p>
                <strong>Company:</strong> ${job.company} |
                <strong>Location:</strong> ${job.location} |
                <strong>Status:</strong>
                <span style="color:${job.status === "open" ? "green" : "red"};">
                    ${job.status}
                </span>
            </p>

          

            <span class="details-btn"">
                View Details
            </span>
            &nbsp;
            <a href="apply.html">Apply Now</a>

            <div class="details">
                <p><strong>Salary:</strong> $${job.salary}</p>
                <p><strong>Date Added:</strong> ${job.dateAdded}</p>
                  <p><strong>description: <br></strong>${job.description || "No description available"}</p>
            </div>
        `;

        container.appendChild(jobDiv);
    });

    addToggle();
}

function addToggle() {
    document.querySelectorAll(".details-btn").forEach(btn => {
        btn.addEventListener("click", function () {

            let details = this.parentElement.querySelector(".details");

            document.querySelectorAll(".details").forEach(d => {
                if (d !== details) d.style.display = "none";
            });

            details.style.display =
                details.style.display === "block" ? "none" : "block";
        });
    });
}

renderJobs();
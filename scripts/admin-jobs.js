let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let tableBody = document.getElementById("jobTableBody");

function renderJobs() {
    tableBody.innerHTML = "";

    jobs.forEach((job, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${job.jobTitle}</td>
            <td>${job.company}</td>
            <td>${job.location}</td>
            <td>$${job.salary}</td>
            <td>${job.status}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        // DELETE
        row.querySelector(".delete-btn").addEventListener("click", () => {
            if (confirm("Are you sure?")) {
                jobs.splice(index, 1);
                localStorage.setItem("jobs", JSON.stringify(jobs));
                renderJobs();
            }
        });

        // EDIT
        row.querySelector(".edit-btn").addEventListener("click", function () {

            if (!this.classList.contains("editing")) {

                let cells = row.children;

                cells[0].innerHTML = `<input value="${job.jobTitle}">`;
                cells[1].innerHTML = `<input value="${job.company}">`;
                cells[2].innerHTML = `<input value="${job.location}">`;
                cells[3].innerHTML = `<input type="number" value="${job.salary}">`;
                cells[4].innerHTML = `
                    <select>
                        <option value="open" ${job.status === "open" ? "selected" : ""}>Open</option>
                        <option value="closed" ${job.status === "closed" ? "selected" : ""}>Closed</option>
                    </select>
                `;

                this.classList.add("editing");
                this.textContent = "Save";

            } else {

                let cells = row.children;

                job.jobTitle = cells[0].querySelector("input").value;
                job.company = cells[1].querySelector("input").value;
                job.location = cells[2].querySelector("input").value;
                job.salary = cells[3].querySelector("input").value;
                job.status = cells[4].querySelector("select").value;

                localStorage.setItem("jobs", JSON.stringify(jobs));

                renderJobs();
            }

        });

        tableBody.appendChild(row);
    });
}

renderJobs();

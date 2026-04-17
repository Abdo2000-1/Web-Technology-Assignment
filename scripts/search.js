let search = document.querySelector(".search-input");
let search_btn = document.querySelector(".search-btn");
let container = document.querySelector(".table-container");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

search_btn.onclick = function () {
    let val = search.value.toLowerCase();

    let result = jobs.filter(job =>
        job.jobTitle.toLowerCase().includes(val)
    );

    container.innerHTML = "";

    let table = document.createElement("table");
    table.border = "1";

    table.innerHTML = `
        <thead>
            <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Status</th>
                <th>Apply </th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    let tbody = table.querySelector("tbody");

    result.forEach(job => {
        tbody.innerHTML += `
            <tr>
                <td>${job.jobTitle}</td>
                <td>${job.company}</td>
                <td>${job.location}</td>
                <td>${job.status}</td>
                <td> <a href="../pages/apply.html">Apply Now </a?</td>
            </tr>
        `;
    });

    container.appendChild(table);
};
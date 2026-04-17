const tbody = document.getElementById("jobs-table-body");

// Data Gathering
let savedApps = JSON.parse(localStorage.getItem("applications")) || [];
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

let allApps = savedApps.map(app => {
    let job = jobs.find(j => j.jobTitle === app.job);

    return {
        job: app.job,
        company: job?.company || "Unknown",
        date: app.date,
        status: app.status
    };
});

// show data in table
function renderTable(data) {
    tbody.innerHTML = "";

    if (!data.length) {
        tbody.innerHTML = `<tr><td colspan="4">No applications yet</td></tr>`;
        return;
    }

    data.forEach(app => {
        tbody.innerHTML += `
            <tr>
                <td>${app.job}</td>
                <td>${app.company}</td>
                <td>${app.date}</td>
                <td class="status-${app.status.toLowerCase()}">
                    ${app.status}
                </td>
            </tr>
        `;
    });
}
renderTable(allApps);
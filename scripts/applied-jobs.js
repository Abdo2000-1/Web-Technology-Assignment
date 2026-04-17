const tbody = document.getElementById("jobs-table-body");

//recall the saved applications from localStorage
let savedApps = JSON.parse(localStorage.getItem("applications")) || [];

let allApps = savedApps.map(app => ({
    job: app.job,
    company: "Your Selected Company",
    date: app.date,
    status: app.status
}));

// view table
function renderTable(data) {
    tbody.innerHTML = "";

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5">No applications yet</td></tr>`;
        return;
    }

    data.forEach(app => {
        const tr = document.createElement("tr");

        let statusClass = "";
        switch (app.status.toLowerCase()) {
            case "pending": statusClass = "status-pending"; break;
            case "accepted": statusClass = "status-accepted"; break;
            case "reviewed": statusClass = "status-reviewed"; break;
            case "rejected": statusClass = "status-rejected"; break;
            default: statusClass = "status-pending";
        }

        tr.innerHTML = `
            <td>${app.job}</td>
            <td>${app.company}</td>
            <td>${app.date}</td>
            <td class="${statusClass}">${app.status}</td>
         
        `;

        tbody.appendChild(tr);
    });
}

// show data
renderTable(allApps);
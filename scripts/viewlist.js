let jobs = JSON.parse(localStorage.getItem("jobs"));
let tabel = document.querySelector(".table")


jobs.forEach((part) => {
    tabel.innerHTML += `<tr>
    <td>${part.jobTitle}</td>
    <td>${part.company}</td>
    <td>${part.location}</td>
    <td>${part.status}</td>
    </tr>
    `
});
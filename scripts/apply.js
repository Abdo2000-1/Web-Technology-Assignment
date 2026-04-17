
let box = document.getElementById("uploadBox");
let input = document.getElementById("fileInput");
let jobs = JSON.parse(localStorage.getItem("jobs"));
let titles = document.querySelector("#jobTitle");


jobs.forEach((part) => {
    titles.innerHTML += `<option value="${part.jobTitle}">${part.jobTitle}</option>`;
});
    

// box click
box.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", () => {
    let file = input.files[0];
    if (file) {
        box.innerHTML = `<p style="color: #2da7c9; font-weight: bold;">Selected: ${file.name}</p>`;
    }
});

// Drag & Drop
box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.style.borderColor = "#2da7c9";
});

box.addEventListener("dragleave", () => {
    box.style.borderColor = "#ccc";
});

box.addEventListener("drop", (e) => {
    e.preventDefault();

    let file = e.dataTransfer.files[0];
    input.files = e.dataTransfer.files;

    if (file) {
        box.innerHTML = `<p style="color: #2da7c9; font-weight: bold;">Selected: ${file.name}</p>`;
    }
});

// check form
function handleSubmit(e) {
    e.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let job = document.getElementById("jobTitle").value;
    let exp = document.getElementById("experience").value;

    let file = input.files[0];

    let valid = true;

    if (name === "") {
        showError("name-error");
        valid = false;
    } else hideError("name-error");

    if (!email.includes("@")) {
        showError("email-error");
        valid = false;
    } else hideError("email-error");

    if (job === "") {
        showError("job-error");
        valid = false;
    } else hideError("job-error");

    if (exp === "" || exp < 0) {
        showError("exp-error");
        valid = false;
    } else hideError("exp-error");

    if (!file) {
        showError("file-error");
        valid = false;
    } else {
        hideError("file-error");
    }

    if (valid) {
        saveApplication(job,name,email,exp);
    }
}


// error handling
function showError(id) {
    let el = document.getElementById(id);
    if (el) el.style.display = "block";
}

function hideError(id) {
    let el = document.getElementById(id);
    if (el) el.style.display = "none";


}
// save application to localStorage
function saveApplication(jobTitle,name,email,exp) {
    let apps = JSON.parse(localStorage.getItem("applications")) || [];

    let app = {
        name : name,
        email : email,
        exp : exp,
        job: jobTitle,
        date: new Date().toLocaleDateString(),
        status: "Pending"
    };

    apps.push(app);
    localStorage.setItem("applications", JSON.stringify(apps));

    // Show success message and redirect
    let submitBtn = document.querySelector(".submit-btn");
    submitBtn.innerText = "Applied Successfully! Redirecting...";
    submitBtn.style.backgroundColor = "#28a745"; 
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
    setTimeout(() => {
        window.location.href = "applied-jobs.html";
    }, 2000);
}
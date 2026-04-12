// DELETE
document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        let row = this.parentElement.parentElement;

        let confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            row.remove();
        }
    });
});

document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        let row = this.parentElement.parentElement;

        if (!this.classList.contains("editing")) {

            for (let i = 0; i < row.children.length - 1; i++) {
                let cell = row.children[i];
                let text = cell.textContent;

                if (i === 3) {
                    let cleanNumber = text.replace(/\D/g, "");
                    cell.innerHTML = `<input type="number" value="${cleanNumber}">`;
                }

                // status (index 4)
                else if (i === 4) {
                    let selected = text.trim().toLowerCase();
                    cell.innerHTML = `
                        <select>
                            <option value="Open" ${selected === "open" ? "selected" : ""}>Open</option>
                            <option value="Closed" ${selected === "closed" ? "selected" : ""}>Closed</option>
                        </select>
                    `;
                }

                else {
                    cell.innerHTML = `<input value="${text}">`;
                }
            }

            this.classList.add("editing");
            this.innerHTML = '<i class="fa-solid fa-check"></i>'; 

        } else {

            for (let i = 0; i < row.children.length - 1; i++) {
                let cell = row.children[i];

                if (i === 3) {
                    let input = cell.querySelector("input");
                    cell.textContent = "$" + input.value;
                }

                else if (i === 4) {
                    let select = cell.querySelector("select");
                    cell.textContent = select.value;
                }

                else {
                    let input = cell.querySelector("input");
                    cell.textContent = input.value;
                }
            }

            this.classList.remove("editing");
            this.innerHTML = '<i class="fa-solid fa-pen"></i>'; 
        }

    });
});
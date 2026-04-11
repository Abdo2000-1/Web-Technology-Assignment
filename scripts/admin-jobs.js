document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function () {

        let row = this.parentElement.parentElement;

        if (this.textContent === "Delete") {

            let confirmDelete = confirm("Are you sure you want to delete?");

            if (confirmDelete) {
                row.remove();
            }
        }

        if (this.textContent === "Edit") {

            for (let i = 0; i < row.children.length - 1; i++) {
                let cell = row.children[i];
                let text = cell.textContent;
                cell.innerHTML = `<input value="${text}">`;
            }

            this.textContent = "Save";
        }

        else if (this.textContent === "Save") {

            for (let i = 0; i < row.children.length - 1; i++) {
                let cell = row.children[i];
                let input = cell.querySelector("input");
                cell.textContent = input.value;
            }

            this.textContent = "Edit";
        }

    });
});
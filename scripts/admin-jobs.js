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

        // لو في وضع Edit
        if (!this.classList.contains("editing")) {

            for (let i = 0; i < row.children.length - 1; i++) {
                let cell = row.children[i];
                let text = cell.textContent;
                cell.innerHTML = `<input value="${text}">`;
            }

            this.classList.add("editing");
            this.innerHTML = '<i class="fa-solid fa-check"></i>'; 

        } 
        else {

            for (let i = 0; i < row.children.length - 1; i++) {
                let cell = row.children[i];
                let input = cell.querySelector("input");
                cell.textContent = input.value;
            }

            this.classList.remove("editing");
            this.innerHTML = '<i class="fa-solid fa-pen"></i>'; 
        }

    });
});
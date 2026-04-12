document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        let parent = this.parentElement;
        let details = parent.querySelector(".details");

        document.querySelectorAll(".details").forEach(d => {
            if (d !== details) {
                d.style.display = "none";
            }
        });

        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }

    });
});
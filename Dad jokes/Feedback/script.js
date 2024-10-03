const ratingEls = document.querySelectorAll(".rating");
const btnE1 = document.getElementById("btn");
const containerE1 = document.querySelector(".container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnE1.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerE1.innerHTML = `
            <strong>Thank you</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
        `;
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}

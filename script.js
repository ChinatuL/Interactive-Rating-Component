const rateBtns = document.querySelectorAll(".rate-btn");
const submitBtn = document.querySelector(".submit-btn");
const card = document.querySelector(".card");
const thanksCard = document.querySelector(".card-thanks");
let rateValue = 0;
let customerRating = document.querySelector(".customer-rating");

rateBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
        if (btn.classList.contains("btn-clicked")) {
            btn.classList.remove("btn-clicked");
            rateValue = 0;
        } else if (!btn.classList.contains("btn-clicked") && rateValue !== 0) {
            rateBtns.forEach((btn) => btn.classList.remove("btn-clicked"));
            btn.classList.add("btn-clicked");
            rateValue = btn.id;
        } else {
            btn.classList.add("btn-clicked");
            rateValue = btn.id;
        }
        customerRating.innerHTML = `You have selected ${rateValue} out of 5`;
    })
);

submitBtn.addEventListener("click", () => {
    if (rateValue !== 0) {
        card.style.display = "none";
        thanksCard.style.display = "block";
    }
});

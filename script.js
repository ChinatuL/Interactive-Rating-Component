const card = document.querySelector(".card");
const thanksCard = document.querySelector(".card-thanks");
const form = document.getElementById("form");
let customerRating = document.querySelector(".customer-rating");
const rateAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const rateValue = form.rating.value;
    if (!rateValue) {
        rateAlert.classList.add("show-alert");
    } else {
        customerRating.innerHTML = `You have selected ${rateValue} out of 5`;
        card.style.display = "none";
        thanksCard.style.display = "block";
    }
    console.log(rateValue);
});

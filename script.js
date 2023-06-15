const submitBtn = document.querySelector(".submit-btn");
const rateScreen = document.querySelector("#rating");
const thankyouScreen = document.querySelector("#thank-you");
const rateBtns = document.querySelectorAll(".rate-btn");
const userChoice = document.querySelector(".user-choice");
let selectedRate = 5;

rateBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    for (const curBtn of document.querySelectorAll(".rate-btn.clicked")) {
      curBtn.classList.remove("clicked");
    }
    btn.classList.toggle("clicked");
    selectedRate = e.target.textContent;
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  thankyouScreen.style.display = "flex";
  rateScreen.style.display = "none";
  userChoice.textContent = selectedRate;
});

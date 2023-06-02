// ----------------- LEFT CONTENT --------------------
const leftBtn = document.querySelector(".login__btn");
const frontPage = document.querySelector(".front__page");
const formPage = document.querySelector(".form__page");
const closeBtn = document.querySelector(".close__btn");
const leftBackground = document.querySelector("body");

leftBtn.addEventListener("click", () => {
    frontPage.classList.add("left__display");
    closeBtn.style.display = "block";
    leftBackground.style.backgroundColor = "#1cdf23";
    formPage.classList.add("display");
});

closeBtn.addEventListener("click", () => {
    leftBackground.style.backgroundColor = "#fff";
    frontPage.classList.remove("left__display");
    closeBtn.style.display = "none";
    formPage.classList.remove("display");
})


// --------------- RIGHT CONTENT ---------------------
const rightBtn = document.querySelector(".right__login__btn");
const rightFrontPage = document.querySelector(".right__front__page");
const rightFormPage = document.querySelector(".right__form__page");
const rightCloseBtn = document.querySelector(".right__close__btn");
const rightBackground = document.querySelector("body");

rightBtn.addEventListener("click", () => {
    rightFrontPage.classList.add("right__display");
    rightCloseBtn.style.display = "block";
    rightBackground.style.backgroundColor = "#0a54ff";
    rightFormPage.classList.add("right__form__display");
});

rightCloseBtn.addEventListener("click", () => {
    rightBackground.style.backgroundColor = "#fff";
    rightFrontPage.classList.remove("right__display");
    rightCloseBtn.style.display = "none";
    rightFormPage.classList.remove("right__form__display");
})



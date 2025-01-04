const checkbox = document.querySelector("#checkbox");
const navMenu = document.querySelector(".navMenu");
const navItem = document.querySelectorAll(".navItem");
let links = document.querySelectorAll(".navMenu a")

checkbox.addEventListener("click", () => {
  checkbox.classList.toggle("active");
  navMenu.classList.toggle("active");
});




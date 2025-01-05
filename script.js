let checkbox = document.querySelector('#checkbox');
let navMenu = document.querySelector('.navMenu');
let links = document.querySelectorAll('navItem');

checkbox.addEventListener("click", () => {
  checkbox.classList.toggle("active");
  navMenu.classList.toggle("active");
});





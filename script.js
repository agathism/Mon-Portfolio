const burgerBtn = document.querySelector('#checkbox');
const navMenu = document.querySelector('.navMenu');
const links = document.querySelectorAll('.navItem > a');
const navbar = document.querySelector('.navbar');

burgerBtn.addEventListener("click", () => {
  burgerBtn.checked = !navMenu.classList.contains('active');
  navMenu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    burgerBtn.checked = false;
    navMenu.classList.toggle("active");
  });
});





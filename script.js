let checkbox = document.querySelector('#checkbox');
let navMenu = document.querySelector('.navMenu');
let links = document.querySelectorAll('navItem');


checkbox.addEventListener("click", () => {
  checkbox.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// function toggle() {
//   if (checkbox.classList.contains("showMenu")) {
//     checkbox.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// checkbox.addEventListener("click", toggle);

// links.forEach( 
//   function(navItem) { 
//     navItem.addEventListener("click", toggle);
//   }
// )







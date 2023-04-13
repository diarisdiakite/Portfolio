const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerNavMenu = document.querySelector('.hamburger-navmenu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  hamburgerNavMenu.classList.toggle('active');
  // hamburgerNavMenu.classList.toggle("showHamburgerNavMenu");
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  hamburgerNavMenu.classList.remove('active');
  // hamburgerNavMenu.classList.remove("showHamburgerNavMenu");
}));
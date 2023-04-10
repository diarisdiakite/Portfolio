const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerNavMenu = document.querySelector('.hamburger-navmenu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  hamburgerNavMenu.classList.toggle('active');
  // hamburgerNavMenu.classList.toggle("showHamburgerNavMenu");
});

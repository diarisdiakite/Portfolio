const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerNavMenu = document.querySelector('.hamburger-navmenu');
const navbar = document.querySelector('.hamburger-container');

let isMenuActive = false;

hamburgerMenu.setAttribute('class', 'hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  if (isMenuActive) {
    navbar.classList.add('hidden');
    hamburgerNavMenu.classList.add('hidden');
    hamburgerMenu.classList.remove('active');
    hamburgerNavMenu.classList.remove('showHamburgerNavMenu');
    isMenuActive = false;
  } else {
    navbar.classList.remove('hidden');
    hamburgerNavMenu.classList.remove('hidden');
    hamburgerMenu.classList.add('active');
    hamburgerNavMenu.classList.add('showHamburgerNavMenu');
    isMenuActive = true;
  }
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  navbar.classList.add('hidden');
  hamburgerMenu.setAttribute('class', 'hamburger-menu');
  isMenuActive = false;
}));
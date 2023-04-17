const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.setAttribute('class', 'hamburger-menu');

const hamburgerNavMenu = document.querySelector('.hamburger-navmenu');
const navbar = document.querySelector('.not-navbar');

// Menu when active
const hamburgerToggle = document.createElement('div');
hamburgerToggle.classList.add('hamburger-menu.active');

hamburgerMenu.addEventListener('click', () => {
  if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
    hamburgerMenu.setAttribute('visibility', 'visible');
  }

  if (hamburgerNavMenu.classList.contains('hidden')) {
    hamburgerNavMenu.classList.remove('hidden');
  } else {
    hamburgerNavMenu.classList.add('hidden');
  }
  hamburgerMenu.classList.toggle('active');
  hamburgerNavMenu.classList.toggle('active');
  hamburgerNavMenu.classList.toggle('showHamburgerNavMenu');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgerNavMenu.setAttribute('visibility', 'hidden');
}));
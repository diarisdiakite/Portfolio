const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerNavMenu = document.querySelector('.hamburger-navmenu');
const navbar = document.querySelector('.not-navbar')

hamburgerMenu.addEventListener('click', () => {
  if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden')
  } else {
    navbar.classList.add('hidden');
  }

  if (hamburgerNavMenu.classList.contains('hidden')) {
    hamburgerNavMenu.classList.remove('hidden')
  } else {
    hamburgerNavMenu.classList.add('hidden');
  }
 // hamburgerMenu.classList.toggle('active');
  //hamburgerNavMenu.classList.toggle('active');
  // hamburgerNavMenu.classList.toggle("showHamburgerNavMenu");
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  hamburgerNavMenu.classList.remove('active');
  // hamburgerNavMenu.classList.remove("showHamburgerNavMenu");
}));

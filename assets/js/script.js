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


// POPUP WINDOW


//let projectPopup = document.getElementById('projectPopup');
let projects = [
    {
    title: 'Mobile version skeleton',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'live-version-link',
    sourceLink: 'source-link'
  },
  {
    title: 'Mobile version',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'live-version-link',
    sourceLink: 'source-link'
  },
  {
    title: 'Contact form',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'live-version-link',
    sourceLink: 'source-link'
  },
  {
    title: 'Desktop version',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'live-version-link',
    sourceLink: 'source-link'
  },
  {
    title: 'Application deploy',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'live-version-link',
    sourceLink: 'source-link'
  },
  {
    title: 'Evaluate accessibility',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'live-version-link',
    sourceLink: 'source-link'
  }
];

//const container = document.getElementById('recent_work');

  projects.forEach(project => {
  // Create projectCardJs element
  const projectCardJs = document.createElement('div');
  projectCardJs.classList = 'open-project-popup';
 
  //appending image
  let image = document.createElement('img');
  image.src = '../../images/popup/SnapshootPortfolio.svg';
  image.classList = 'project-popup-img';
  projectCardJs.appendChild(image);

  //Project Title
  let title = document.createElement('h3');
  title.textContent = `${project.title}`;
  title.classList = "section-title"
  projectCardJs.appendChild(title);
    
  //Project links
  let liveLink = document.createElement('a');
  liveLink.text = `${project.liveVersionLink}`;
  projectCardJs.appendChild(liveLink)

  let sourceLink = document.createElement('a');
  sourceLink.text = `${project.sourceLink}`;
  projectCardJs.appendChild(sourceLink);

  

  //Project description
  let p = document.createElement('p');
  p.textContent = `${project.description}`
  projectCardJs.appendChild(p);

  let projectPopup = document.querySelector("#projectPopup");
  projectPopup.appendChild(projectCardJs);
})


const openProjectPopup = () => { //Testing the other function
  projectPopup.classList.add('open-project-popup')
}

const closeProjectPopup = () => {
  projectPopup.classList.remove('open-project-popup');
}

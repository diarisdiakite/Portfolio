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
  projectCardJs.classList = 'project-card-js';
  projectCardJs.setAttribute('width', '50')
 
  //appending image
  let popupImage = document.createElement('div');
  popupImage.classList.add('project-popup-img');

  let image = document.createElement('img');
  image.src = '../../images/popup/SnapshootPortfolio.svg';
  popupImage.appendChild(image)
  projectCardJs.appendChild(popupImage);
  


  //create diw with Ttilt and 2 links in display flex

  let titleLinksDiv = document.createElement('div');
  titleLinksDiv.classList.add('js-title-div');
      
  //Project Title
  let title = document.createElement('h3');
  title.textContent = `${project.title}`;
  title.classList = "section-title";
  titleLinksDiv.appendChild(title);

  let linksContainer = document.createElement('div');
  linksContainer.classList.add('js-link-list');

  //Project links
  let liveLink = document.createElement('button');
  liveLink.textContent = `${project.liveVersionLink}`;
  liveLink.setAttribute('class', 'project-button');
  linksContainer.appendChild(liveLink);

  let sourceLink = document.createElement('button');
  sourceLink.setAttribute('class', 'project-buttons');
  sourceLink.setAttribute('alt', 'project-buttons');
  sourceLink.textContent = `${project.sourceLink}`;
  linksContainer.appendChild(sourceLink);

  //Append the 3 elements to project card
  titleLinksDiv.appendChild(linksContainer);
  projectCardJs.appendChild(titleLinksDiv);

  //Project description
  let description = document.createElement('p');
  description.textContent = `${project.description}`;
  //description.setAttribute('class', 'p');
  //description.setAttribute('');
  projectCardJs.appendChild(description);

  
  let projectPopup = document.querySelector("#projectPopup");
  projectPopup.appendChild(projectCardJs);
  let modal = document.createElement('div');
  modal.classList.add('popup-modal');
  modal.appendChild(projectPopup);

  let body = document.querySelector('body');
  body.appendChild(modal);
})


const openProjectPopup = () => { //Testing the other function
  projectPopup.classList.add('open-project-popup')
}

const closeProjectPopup = () => {
  projectPopup.classList.remove('open-project-popup');
}

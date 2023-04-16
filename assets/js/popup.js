// POPUP WINDOW

//const { url } = require("inspector");


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

projects.forEach(project => {
  // Create projectCardJs element
  const projectCardJs = document.createElement('div');
  projectCardJs.classList = 'project-card-js';
  
 
  //Append close button 
  let popupCloseButton = document.createElement('button');
  popupCloseButton.setAttribute('name', 'close');
  popupCloseButton.setAttribute('id', 'js-button-close');
  popupCloseButton.setAttribute('class', 'js-button-close');
  projectCardJs.appendChild(popupCloseButton);
  
  //Create a type with all the tect element and the image
  let textDiv = document.createElement('div');
  textDiv.classList.add('js-text-container');

  //appending image
  let popupImage = document.createElement('div');
  //if min-width: 375;
  let image = document.createElement('img');
  if(window.innerWidth < 768) {  //--------------------TO FIX--------------------------------
    image.src = '../../images/popup/SnapshootPortfolioMobile.svg';
    image.classList.add('.project-popup-desktop-img');
    popupImage.classList.add('project-popup-desktop-img');
  } else if (window.innerWidth >= 768){
    image.src = '../../images/popup/SnapshootPortfolio.svg';
    image.classList.add('.project-popup-desktop-img'); 
    popupImage.classList.add('project-popup-mobile-img');
  }   
  popupImage.appendChild(image);
  textDiv.appendChild(popupImage);
  
  //create diw with Title and 2 links in display flex
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
  sourceLink.setAttribute('class', 'project-button');
  sourceLink.setAttribute('alt', 'project-buttons');
  sourceLink.textContent = `${project.sourceLink}`;
  linksContainer.appendChild(sourceLink);

  //Append the 3 elements to project card
  titleLinksDiv.appendChild(linksContainer);
  textDiv.appendChild(titleLinksDiv);
  

  // I - CREATE THE TECHNOLOGIES LINKS ----- TO FIX -----------------------------
  
  let techDiv = document.querySelectorAll('.project-built-with > li');
  let techList = document.createElement('div');
  techList.classList.add('js-project-built-with');
  let technology0 = techDiv[0];
  let technology1 = techDiv[1];
  let technology2 = techDiv[2];
  let technology3 = techDiv[3];
  techList.appendChild(technology0);
  techList.appendChild(technology1);
  techList.appendChild(technology2);
  techList.appendChild(technology3);
  textDiv.appendChild(techList);
  /*
  let techList = project.technologies.forEach((technology) => technology);
  techDiv.appendChild(techList);
  projectCardJs.appendChild(techDiv);
  */
  
  //Project description
  let description = document.createElement('p');
  description.textContent = `${project.description}`;
  description.setAttribute('class', 'js-p-style');
  description.setAttribute('text-align', 'left');
  textDiv.appendChild(description);
  projectCardJs.appendChild(textDiv);
    
  let projectPopup = document.querySelector("#projectPopup");
  projectPopup.appendChild(projectCardJs);
  let modal = document.createElement('div');
  modal.classList.add('popup-modal');
  modal.appendChild(projectPopup);

  let body = document.querySelector('body');
  

  // V - CREATE BUTTONS LIST
  // VI - CREATE POPUP BUTTON CLOSE
  // VI - ADD EVENT LISTERNER OPEN AND CLOSE

  let projectButtons = document.querySelectorAll('.project-buttons');
  console.log(projectButtons);
  
  // FIXING PROJECT BUTTON LINKING TO SPECIFIC PROJECT ISSUE
  projectButtons.forEach(projectButton => {
    projectButton.addEventListener('click', () => {
        projectPopup.classList.add('open-project-popup');
        body.appendChild(modal);
    })
  })

  
  popupCloseButton.addEventListener('click', () => {
    body.removeChild(modal);
  })

})
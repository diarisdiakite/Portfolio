//import { openPopup } from '/projectCards'
// POPUP WINDOW
export let projects = [
    {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Mobile version skeleton',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source'
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Mobile version',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source'
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Contact form',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source'
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Desktop version',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source'
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Application deploy',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source'
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Evaluate accessibility',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source'
  }
];

/*FOR TESTING PURPOSE*/
export const getProjectId = () => {
  let project;
  let projectId;
  for(let i=0; i<projects.length; i+=1){
    project = projects[i];
    console.log(project);
    projectId=i;
 }
  return projectId;
}

//Create the Modal
export let myModal = projects.forEach(project => {
  // Create projectCardJs element
  const projectCardJs = document.createElement('div');
  projectCardJs.classList = ('project-card-js');
  
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
  
  let image = document.createElement('img');
  
  if(window.innerWidth < 768) {
    image.src = `${project.mobileImageUrl}`;
    image.classList.add('.project-popup-mobile-img');
    popupImage.classList.add('project-popup-mobile-img');
  } else {
    image.src = `${project.desktopImageUrl}`;
    image.classList.add('.project-popup-desktop-img'); 
    popupImage.classList.add('project-popup-desktop-img');
  }
  
  popupImage.appendChild(image);
  textDiv.appendChild(popupImage);
  
  //create diw with Title and 2 links in display flex
  let titleLinksDiv = document.createElement('div');
  titleLinksDiv.classList.add('js-title-div'); //ADD DESKTOP----------------------
      
  //Project Title
  let title = document.createElement('h3');
  title.textContent = `${project.title}`;
  title.classList.add('section-title');
  titleLinksDiv.appendChild(title);

  let linksContainer = document.createElement('div');
  linksContainer.classList.add('js-link-list');

  //Project links
  //live link
  let liveLink = document.createElement('button');
  liveLink.textContent = `${project.liveVersionLink}`;
  liveLink.classList.add('js-liveLink-button');
  liveLink.setAttribute('alt', 'link to the project live Demo');
  //adding the image to the "See live" button
  let liveLinkImg = document.createElement('img');
  liveLinkImg.src = '../../images/popup/icon-export.svg';
  liveLinkImg.classList.add('js-liveLink-img');
  liveLink.appendChild(liveLinkImg);
  linksContainer.appendChild(liveLink);
  //Source link
  let sourceLink = document.createElement('button');
  sourceLink.textContent = `${project.sourceLink}`;
  sourceLink.classList.add('js-sourceLink-button');
  sourceLink.setAttribute('alt', 'Link to the project souce');
  //adding the image to the "See source" button
  let sourceLinkImg = document.createElement('img');
  sourceLinkImg.src = '../../images/popup/icon-github.svg';
  sourceLinkImg.classList.add('js-liveLink-img');
  sourceLink.appendChild(sourceLinkImg);
  linksContainer.appendChild(sourceLink);
  //Append the 3 elements to project card
  titleLinksDiv.appendChild(linksContainer)
  textDiv.appendChild(titleLinksDiv);

  // I - CREATE THE TECHNOLOGIES LINKS ----- TO FIX -----------------------------
  let technologyList = project.technologies;
  let technologyFragment = document.createDocumentFragment();

  const renderTechnologyList = (value, index) => {
    const technology = document.createElement('li');
    technology.textContent = value;
    technologyFragment.append(technology);
  }
  technologyList.forEach(renderTechnologyList);
  textDiv.append(technologyList);

  //Project description
  let description = document.createElement('p');
  description.textContent = `${project.description}`;
  description.setAttribute('class', 'js-p-style');
  description.setAttribute('text-align', 'left');
  textDiv.appendChild(description);

  if(window.innerWidth >= 768){
    sourceLink.classList.add('.js-desktop-link-list');
    titleLinksDiv.appendChild(linksContainer);
  }
  if (window.innerWidth < 768){
    sourceLink.classList.add('.js-mobile-link-list');
    textDiv.appendChild(linksContainer);
  }
  projectCardJs.appendChild(textDiv);
  

  // appending modal elements
  let projectPopup = document.createElement('div');  //getElementById and querySelector not working ------FIX
  projectPopup.appendChild(projectCardJs);
  
  let modal = document.createElement('div');
  modal.classList.add('popup-modal');
  modal.appendChild(projectPopup);
  
  // VI - ADD EVENT LISTERNER OPEN THE MODAL
  let body = document.querySelector('body');
  //body.append(modal); //FOR TESTING PURPOSE ---------- TO REMOVE ---------------------
  /*
  let projectButtons = document.getElementsByClassName('project-buttons');
  projectButtons.addEventLister('click', openPopup());
  */

  // VI - ADD EVENT LISTERNER OPEN AND CLOSE
  popupCloseButton.addEventListener('click', () => {
    body.remove(modal);
  });

})

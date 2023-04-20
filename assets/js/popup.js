let projects = [
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

// PROJECT CARDS

const projectsDivHTML = document.querySelector('.projects');
//projectsDivHTML.classList.add('projects');
let project;
  //Adding the projects dynamically
    //projects.forEach(project => {
  for(let i=0; i<projects.length; i+=1){
    project = projects[i];
    let fetch = document.querySelector('.projects').innerHTML;
    const projectCardHtml = document.createElement('div');
    //projectCardHtml.classList.add('js-projectCards')
    projectCardHtml.innerHTML=`
      <div class="project">
        <div id="cards${i}">
        </div>
        <div class="project-wrapped-text">
        <div class="sections-title">
          <h3>
            ${project.title}
          </h3>
        </div>
        <ul class="project-built-with" name="technologies">
          <li><a href="https://rubyonrails.org/" rel="noopener" target="_blank">${project.technologies[0]}</a></li>
          <li><a href="https://www.w3.org/Style/CSS/Overview.en.html" rel="noopener" target="_blank">${project.technologies[1]}</a></li>
          <li><a href="https://www.javascript.com/" rel="noopener" target="_blank">${project.technologies[2]}</a></li>
          <li><a href="https://html.com/" rel="noopener" target="_blank">${project.technologies[3]}</a></li>
        </ul>
        <button class="project-buttons" id="projectPopup">See project</button>
      </div>` 
            
      let projectImageContainer = document.getElementById(`cards${i}`);
      let projectImage = document.createElement('img');
      //projectImage.setAttribute('opacity', '100');

      if(window.innerWidth < 768) {  //--------------------TO FIX--------------------------------
        //projectImageContainer.style.backgroundImage = `${project.mobileImageUrl}`;
        
        projectImage.src = `${project.mobileImageUrl}`;
        projectImage.classList.add('img-placeholder');
        projectCardHtml.appendChild(projectImage);
        projectCardHtml.classList.add('js-mobile-projectCards');
      } else {
        projectImage.classList.add('img-placeholder'); 
        projectCardHtml.appendChild(projectImage);
        projectCardHtml.classList.add('js-desktop-projectCards');
      }
      projectsDivHTML.appendChild(projectCardHtml);
      +fetch;
  };
  //console.log(project);
    let projectButtons = document.querySelectorAll('.project-buttons');
    //projectButtons.classList.add('active'); 
    for(let i=0; i<projectButtons.length; i+=1) {
      let projectButton = projectButtons[i];
      let project = projects[i];
    
      projectButton.addEventListener('click', () => {
       //let fetch = document.querySelector('.project-buttons').innerHTML;    
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
        let popupImage = document.createElement('div');//ADD A CLASSNAME HERE
        
        let image = document.createElement('img');
        
        if(window.innerWidth < 768) {
            image.src = `${project.mobileImageUrl}`;
            image.classList.add('project-popup-mobile-img');
            popupImage.classList.add('project-popup-mobile-img');
        } else {
            image.src = `${project.desktopImageUrl}`;
            image.classList.add('project-popup-desktop-img'); 
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
        technologyFragment.className = ('project-built-with.li'); // FIXXXXXXXXXXX
        const renderTechnologyList = (value, index) => {
          const technology = document.createElement('li');
          technology.className = ('project-built-with.li');
          technology.textContent = value;
          technologyFragment.append(technology);
        }
        technologyList.forEach(renderTechnologyList);
        technologyList.className = ('project-built-with.li')
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
        body.appendChild(modal); //FOR TESTING PURPOSE ---------- TO REMOVE ---------------------
        +fetch;

        popupCloseButton.addEventListener('click', () => {
          body.removeChild(modal);
          projectsDivHTML.className='projects';
        });

      });
    }

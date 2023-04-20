import { projects, projectButtons, projectsDivHTML } from './projectCards.js';
  
    for(let i=0; i<projectButtons.length; i+=1) {
      let projectButton = projectButtons[i];
      let project = projects[i];
    
      projectButton.addEventListener('click', () => {
       let fetch = document.querySelectorAll('.project-buttons').innerHTML;    
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
        popupImage.classList.add('js-project-popup-img'); //--------
        let image = document.createElement('img');
        
        if(window.innerWidth < 768) {
            image.src = `${project.mobileImageUrl}`;
            image.classList.add('project-popup-mobile-img'); 
            //image.className = 'project-popup-mobile-img';
            //popupImage.classList.add('project-popup-mobile-img');
        } else {
            image.src = `${project.desktopImageUrl}`;
            image.classList.add('project-popup-desktop-img'); 
            //popupImage.classList.add('project-popup-desktop-img');
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
        liveLink.textContent = '';//`${project.liveVersionLink}`;
        liveLink.className = 'js-liveLink-button';
        liveLink.setAttribute('alt', 'link to the project live Demo');
        linksContainer.appendChild(liveLink);
        //Source link
        let sourceLink = document.createElement('button');
        sourceLink.textContent = ''; //`${project.sourceLink}`;
        sourceLink.className = 'js-sourceLink-button';
        sourceLink.setAttribute('alt', 'Link to the project souce');
        linksContainer.appendChild(sourceLink);
        //Append the 3 elements to project card
        titleLinksDiv.appendChild(linksContainer);
        textDiv.appendChild(titleLinksDiv);

        // I - CREATE THE TECHNOLOGIES LINKS ----- TO FIX -----------------------------
        let technologyList = project.technologies;
        let technologyFragment = document.createDocumentFragment();
        technologyFragment.className = ('technologyFragment'); // FIXXXXXXXXXXX
        const renderTechnologyList = (value, index) => {
          const technology = document.createElement('div');
          technology.textContent = value;
          technology.style.background = 'red';
          technology.classList.add('technologyFragment.li');
          technology.setAttribute('display', 'inline-flex');//--------COME BACK LATER
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
            //sourceLink.classList.add('js-desktop-link-list');
            titleLinksDiv.appendChild(linksContainer);
        }
        if (window.innerWidth < 768){
            //sourceLink.classList.add('js-mobile-link-list');
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
          projectsDivHTML.className=('projects');
        });

      });
    }

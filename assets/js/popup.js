import { projects, projectButtons, projectsDivHTML } from './projectCards.js';

for (let i = 0; i < projectButtons.length; i += 1) {
  const projectButton = projectButtons[i];
  const project = projects[i];

  projectButton.addEventListener('click', () => {
    // Create projectCardJs element
    const projectCardJs = document.createElement('div');
    projectCardJs.classList = ('project-card-js');

    // Append close button
    const popupCloseButton = document.createElement('button');
    popupCloseButton.setAttribute('name', 'close');
    popupCloseButton.setAttribute('id', 'js-button-close');
    popupCloseButton.setAttribute('background-color', 'transparent');
    popupCloseButton.setAttribute('class', 'js-button-close');
    projectCardJs.appendChild(popupCloseButton);

    // Create a type with all the tect element and the image
    const textDiv = document.createElement('div');
    textDiv.classList.add('js-text-container');

    // appending image
    const popupImage = document.createElement('div');
    popupImage.classList.add('js-project-popup-img');
    const image = document.createElement('img');

    if (window.innerWidth < 768) {
      // image.src = `${project.mobileImageUrl}`;
      image.classList.add('project-popup-mobile-img');
      popupImage.classList.remove('js-project-popup-img');
    } else {
      // image.src = `${project.desktopImageUrl}`;
      image.classList.add('project-popup-desktop-img');
      popupImage.classList.remove('js-project-popup-img');
    }
    textDiv.appendChild(image);

    // create div with Title and 2 links in display flex
    const titleLinksDiv = document.createElement('div');
    titleLinksDiv.classList.add('js-title-div');

    // Project Title
    const title = document.createElement('h3');
    title.textContent = `${project.title}`;
    title.classList.add('section-title');
    titleLinksDiv.appendChild(title);

    const linksContainer = document.createElement('div');
    linksContainer.classList.add('js-link-list');

    // Project links
    // live link
    const liveLink = document.createElement('button');
    liveLink.textContent = '';// `${project.liveVersionLink}`;
    liveLink.className = 'js-liveLink-button';
    liveLink.setAttribute('alt', 'link to the project live Demo');
    linksContainer.appendChild(liveLink);
    // Source link
    const sourceLink = document.createElement('button');
    sourceLink.textContent = ''; // `${project.sourceLink}`;
    sourceLink.className = 'js-sourceLink-button';
    sourceLink.setAttribute('alt', 'Link to the project souce');
    linksContainer.appendChild(sourceLink);
    // Append the 3 elements to project card
    titleLinksDiv.appendChild(linksContainer);
    textDiv.appendChild(titleLinksDiv);

    // I - CREATE THE TECHNOLOGIES LINKS
    const technologyList = project.technologies;
    const technologyFragment = document.createDocumentFragment();
    const technology = document.createElement('button');
    technologyFragment.className = ('technologyFragment');
    const renderTechnologyList = (value) => {
      technology.textContent = `<li class="technologyFragment.li">${value}</li>`;
      technology.style.display = 'flex';
      technology.classList.add('technologyFragment.li');
      technologyFragment.append(technology);
    };
    technologyList.forEach(renderTechnologyList);
    technologyFragment.innerHtml += `<a class="technologyFragment.li.a">${technologyList.technology}</a>`;
    textDiv.append(technologyList);

    // find out more ----------
    const technologyFragment1 = document.createDocumentFragment();
    const technologyList1 = document.createElement('div');
    technologyList1.innerHTML += `
    <ul class="project-built-with" name="technologies">
      ${project.technologies.map((tool) => `<li class="popup-items"><a class="popup-links">${tool}</a></li>`).join('')}
    </ul>`;
    technologyFragment1.appendChild(technologyList1);

    // Project description
    const description = document.createElement('p');
    description.textContent = `${project.description}`;
    description.setAttribute('class', 'js-p-style');
    description.setAttribute('text-align', 'left');
    textDiv.appendChild(description);

    if (window.innerWidth >= 768) {
      titleLinksDiv.appendChild(linksContainer);
    }
    if (window.innerWidth < 768) {
      textDiv.appendChild(linksContainer);
    }
    projectCardJs.appendChild(textDiv);

    // appending modal elements
    const projectPopup = document.createElement('div');
    projectPopup.appendChild(projectCardJs);

    const modal = document.createElement('div');
    modal.classList.add('popup-modal');
    modal.appendChild(projectPopup);

    const body = document.querySelector('body');
    body.appendChild(modal);

    // VI - ADD EVENT LISTERNER OPEN THE MODAL
    popupCloseButton.addEventListener('click', () => {
      body.removeChild(modal);
      projectsDivHTML.className = ('projects');
    });
  });
}

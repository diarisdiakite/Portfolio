export const projects = [
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Mobile version skeleton',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Mobile version',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Contact form',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Desktop version',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Application deploy',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrl: '../../images/popup/SnapshootPortfolioMobile.svg',
    desktopImageUrl: '../../images/popup/SnapshootPortfolioDesktop.svg',
    title: 'Evaluate accessibility',
    technologies: [
      'html',
      'javascript',
      'css',
      'React Js',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
];

export const projectsDivHTML = document.querySelector('.projects');
// projectsDivHTML.classList.add('projects');
// Adding the projects dynamically
// projects.forEach(project => {
for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];
  // const content = document.querySelector('.projects').innerHTML;
  const projectCardHtml = document.createElement('div');
  // projectCardHtml.classList.add('js-projectCards')
  projectCardHtml.innerHTML = `
      <div class="project">
        
        <div class="project-wrapped-text">
        <div class="sections-title">
          <h3>
            ${project.title}
          </h3>
        </div>
        <ul class="project-built-with" name="technologies">
          <li><a href="tonhttps://rubyonrails.org/" rel="noopener" target="_blank">${project.technologies[0]}</a></li>
          <li><a href="https://www.w3.org/Style/CSS/Overview.en.html" rel="noopener" target="_blank">${project.technologies[1]}</a></li>
          <li><a href="https://www.javascript.com/" rel="noopener" target="_blank">${project.technologies[2]}</a></li>
          <li><a href="https://html.com/" rel="noopener" target="_blank">${project.technologies[3]}</a></li>
        </ul>
        <button class="project-buttons" id="projectPopup">See project</button>
      </div>
      <div id="project-image" class="project-image">
        </div>`;

  // const projectImageContainer = document.querySelector('#project-image');
  // projectImageContainer.className=
  const projectImage = document.createElement('div');
  // projectImage.setAttribute('opacity', '100');

  if (window.innerWidth < 768) { // --------------------TO FIX--------------------------------
    projectImage.src = `${project.mobileImageUrl}`;
    projectCardHtml.appendChild(projectImage);
    projectCardHtml.classList.add('js-mobile-projectCards');
    // projectCardHtml.classList.add('js-projectCard-image-mobile');
  } else {
    projectImage.src = `${project.desktopImageUrl}`;
    projectCardHtml.appendChild(projectImage);
    projectCardHtml.classList.add('js-desktop-projectCards');
    // projectCardHtml.classList.add('js-projectCard-image-desktop');
  }
  projectsDivHTML.innerHtml += projectCardHtml;
  projectsDivHTML.appendChild(projectCardHtml);
}

export const projectButtons = document.querySelectorAll('.project-buttons');

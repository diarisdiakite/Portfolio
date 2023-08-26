export const projects = [
  {
    mobileImageUrls: [
      '/my-portfolio/assets/img/screenshoots/datams/Capture8.PNG',
      '/my-portfolio/assets/img/screenshoots/datams/Capture5.PNG',
      '/my-portfolio/assets/img/screenshoots/datams/Capture3.PNG',
    ],
    desktopImageUrls: [
      '/my-portfolio/assets/img/screenshoots/datams/Capture6.PNG',
      '/my-portfolio/assets/img/screenshoots/datams/Capture1.PNG',
      '/my-portfolio/assets/img/screenshoots/datams/Capture3.PNG',
    ],
    title: 'M&E App',
    technologies: [
      'Php',
      'MySql',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
    description: 'M&E App is an application to monitor on a regular basis the main outputs from projects and programs activities. The data is aggregated per project and per program to give corporate global results for each outcome. The V001 of the Application was developped for the Monitoring and Evaluation Team of an UN Agency.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrls: [
      '/my-portfolio/assets/img/screenshoots/trem/Capture.PNG',
      '/my-portfolio/assets/img/screenshoots/trem/Capture2.PNG',
      '/my-portfolio/assets/img/screenshoots/trem/Capture1.PNG',
    ],
    desktopImageUrls: [
      '/my-portfolio/assets/img/screenshoots/trem/Capture.PNG',
      '/my-portfolio/assets/img/screenshoots/trem/Capture2.PNG',
      '/my-portfolio/assets/img/screenshoots/trem/Capture1.PNG',
    ],
    title: 'Training For Employment',
    technologies: [
      'Php',
      'MySql',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
    description: 'The TrEM software package has been developed to design training programs using the Competency-Based Approach (CBA). It should be accompanied by a platform bringing together the various players in vocational training (this functionality is currently under development). The project was developed in 2018 and has been selected by several competitive programs at national level (10 best projects for the Prix Orange de l\'Entrepreneur Social in 2019) and also at international level (Winner of the Tony Elumelu Foundation entrepreneurship program). It aims to achieve greater qualification and specialization of employees in fields that are genuinely in demand by companies, as well as strengthening the vocational training system.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrls: [
      '/my-portfolio/assets/img/screenshoots/annual_smse/Capture.PNG',
      '/my-portfolio/assets/img/screenshoots/annual_smse/Capture2.PNG',
      '/my-portfolio/assets/img/screenshoots/annual_smse/Capture1.PNG',
    ],
    desktopImageUrls: [
      '/my-portfolio/assets/img/screenshoots/annual_smse/Capture.PNG',
      '/my-portfolio/assets/img/screenshoots/annual_smse/Capture2.PNG',
      '/my-portfolio/assets/img/screenshoots/annual_smse/Capture1.PNG',
    ],
    title: 'SMSE summit',
    technologies: [
      'html',
      'javascript',
      'css',
      'Bootstrap',
    ],
    description: 'The SMSE summit is a Microverse capstone project developed for the validation of the first module. The project was developed based on a mobile-first approach with functionalities and templates layouts for differents pages and sections.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrls: [
      '/my-portfolio/assets/img/screenshoots/ace/Capture3.PNG',
      '/my-portfolio/assets/img/screenshoots/ace/Capture5.PNG',
      '/my-portfolio/assets/img/screenshoots/ace/Capture4.PNG',
    ],
    desktopImageUrls: [
      '/my-portfolio/assets/img/screenshoots/ace/Capture2.PNG',
      '/my-portfolio/assets/img/screenshoots/ace/Capture5.PNG',
      '/my-portfolio/assets/img/screenshoots/ace/Capture4.PNG',
    ],
    title: 'ACE(ace.org)',
    technologies: [
      'React Js',
      'React-redux',
      'html',
      'css',
      'Bootstrap',
      'Postgres',
    ],
    description: 'SMSE World is a worldwide concept to showcase outstanding actions, projects, people accross the world lauched by the Actions Culture de l\'Excellence (ACE) Association.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrls: [
      '/my-portfolio/assets/img/screenshoots/schoolApp/Capture6.PNG',
      '/my-portfolio/assets/img/screenshoots/schoolApp/Capture6.PNG',
    ],
    desktopImageUrls: [
      '/my-portfolio/assets/img/screenshoots/schoolApp/Capture6.PNG',
      '/my-portfolio/assets/img/screenshoots/schoolApp/Capture6.PNG',
    ],
    title: 'SchoolApp',
    technologies: [
      'React Js',
      'React-redux',
      'html',
      'css',
      'Bootstrap',
      'Postgres',
    ],
    description: 'SchoolApp is an school management application linked to the ACE plateform (ace.org). Each ..... .',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
  {
    mobileImageUrls: [
      '/my-portfolio/assets/img/screenshoots/portfolio-project/Capture3.PNG',
      '/my-portfolio/assets/img/screenshoots/portfolio-project/Capture4.PNG',
      '/my-portfolio/assets/img/screenshoots/portfolio-project/Capture2.PNG',
    ],
    desktopImageUrls: [
      '/my-portfolio/assets/img/screenshoots/portfolio-project/Capture3.PNG',
      '/my-portfolio/assets/img/screenshoots/portfolio-project/Capture4.PNG',
      '/my-portfolio/assets/img/screenshoots/portfolio-project/Capture2.PNG',
    ],
    title: 'My portfolio project',
    technologies: [
      'html',
      'css',
      'javascript',
      'JQuery',
    ],
    description: 'My portfolio project is one of the first Microverse curriculum Projects. It is developed to showcase student\'s projects using features like hamburger menu, cards, popup windows in plain html, css and javascript through: desktop and mobile versions design, application deploy, accessibility, validate contact form, preserve data in browser.',
    liveVersionLink: 'See live',
    sourceLink: 'See source',
  },
];

export const projectsDivHTML = document.querySelector('.projects');

// Adding the projects dynamically
for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];
  const projectCardHtml = document.createElement('div');
  projectCardHtml.innerHTML = `
      <div class="project">
        
        <div class="project-image">
          <img class="img-placeholder" src=${project.desktopImageUrls[1]} alt="project-image" placeholder="image for project 1">
          </img>
        </div>
        
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

  const projectImage = document.createElement('div');
  projectImage.setAttribute('blur', '100');

  if (window.innerWidth < 768) {
    projectImage.src = `${project.mobileImageUrls[0]}`;
    projectCardHtml.appendChild(projectImage);
    // projectCardHtml.classList.add('js-mobile-projectCards');
  } else {
    projectImage.src = `${project.desktopImageUrls[0]}`;
    projectCardHtml.appendChild(projectImage);
    // projectCardHtml.classList.add('js-desktop-projectCards');
  }
  projectsDivHTML.innerHtml += projectCardHtml;
  projectsDivHTML.appendChild(projectCardHtml);
}

export const projectButtons = document.querySelectorAll('.project-buttons');

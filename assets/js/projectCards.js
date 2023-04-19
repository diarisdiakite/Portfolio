import { projects, myModal } from './popup.js';
console.log(projects);


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
        //projectImageContainer.textContent = projectImage;
      } else {
        //projectImageContainer.style.backgroundImage = `${project.desktopImageUrl}`;
        //projectImage.src = `${project.desktopImageUrl}`;
        projectImage.classList.add('img-placeholder'); 
        projectCardHtml.classList.add('js-desktop-projectCards');
        //projectImageContainer.innerHTML = projectImage;
      }
      //projectImageContainer.innerHTML = projectImage;
      
      //projectCardHtml.appendChild(projectImageContainer);
      projectsDivHTML.appendChild(projectCardHtml);
      //body.appendChild(projectsDivHTML)
      +fetch;
  };

  
  /*export function openPopup(){ */
    let projectButtons = document.querySelector('.project-buttons');
    let projectButton;
    console.log(projectButtons);
      for(let i=0, j=0; i<projectButtons.length; i+=1, j+=1){
        projectButton = projectButtons[i];
        project = projects[j];

        if(i===j) {
          projectButtons[i].addEventListener('click', () => {
            //projectPopup.classList.add('open-project-popup');
            body.appendChild(myModal);
          });
        }
        
      }
    
/* })(); */

projectButton.addEventLister('click', openPopup);

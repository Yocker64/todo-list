import './styles/fontsAndReset.css';
import './styles/styles.css';
import { displayForm, handleTaskFormSubmit } from './scripts/formHandling';
import { createProjectElement } from './scripts/project';
import { handleProjectFormSubmit } from './scripts/formHandling';
import { currentProjectID } from './scripts/project';

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.getElementById("projects");
  const projectForm = document.querySelector('#projectForm'); 
  const addProjectIcon = document.getElementById("addProjectIcon");
  const taskForm = document.querySelector('#taskForm'); 
 
  createProjectElement('Home');
  projectForm.addEventListener("submit",(event) => handleProjectFormSubmit(event))
  addProjectIcon.addEventListener("click", ()=>displayForm('projectForm'));
  taskForm.addEventListener("submit",(event)=>handleTaskFormSubmit(event));
});

  
import './styles/fontsAndReset.css';
import './styles/styles.css';
import { displayForm } from './scripts/formHandling';
import { createProjectElement } from './scripts/project';
import { handleFormSubmit } from './scripts/formHandling';



document.addEventListener('DOMContentLoaded', () => {
  const projects = document.getElementById("projects");
  const projectForm = document.querySelector('#projectForm'); 
  const addProjectIcon = document.getElementById("addProjectIcon");

  createProjectElement('Home');
  projectForm.addEventListener("submit",(event) => handleFormSubmit(event,"projectForm"))
  addProjectIcon.addEventListener("click", ()=>displayForm('projectForm'));
  
});

  
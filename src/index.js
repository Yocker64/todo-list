import './styles/fontsAndReset.css';
import './styles/styles.css';
import { displayAddProjectForm } from './scripts/formHandling';
import { handleFormSubmit } from './scripts/formHandling';



document.addEventListener('DOMContentLoaded', () => {
  const projects = document.getElementById("projects");
  const form = document.querySelector('#projectForm'); 
  const addProjectIcon = document.getElementById("addProjectIcon");

  form.addEventListener("submit",(event) => handleFormSubmit(event))
  addProjectIcon.addEventListener("click", displayAddProjectForm);

});

  
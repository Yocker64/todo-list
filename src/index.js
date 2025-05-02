import './styles/fontsAndReset.css';
import './styles/styles.css';
import { displayAddTaskForm } from './scripts/formHandling';
import { createProjectElement } from './scripts/project';






document.addEventListener('DOMContentLoaded', () => {
  const projects = document.getElementById("projects");
  const form = document.querySelector('#test'); 
  const addProjectIcon = document.getElementById("addProjectIcon");
  // displayForm("taskForm");

  createProjectElement('Home');
  createProjectElement('Bruh');
  addProjectIcon.addEventListener("click", displayAddTaskForm);

});

  
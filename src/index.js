import './styles/fontsAndReset.css';
import './styles/styles.css';
import { displayForm, handleEditTaskForm, handleNoteForm, handleTaskFormSubmit } from './scripts/formHandling';
import { createProjectElement, displayTasks } from './scripts/project';
import { handleProjectFormSubmit } from './scripts/formHandling';

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.getElementById("projects");
  const projectForm = document.querySelector('#projectForm'); 
  const addProjectIcon = document.getElementById("addProjectIcon");
  const taskForm = document.querySelector('#taskForm'); 
  const editTaskForm = document.querySelector('#editTaskForm');
  const addNoteIcon = document.querySelector('#addNoteIcon');
  const addNoteForm = document.querySelector("#noteForm");
  const notesTitle = document.querySelector("#notes");

 
  createProjectElement('Home');
  notesTitle.querySelector("h1").addEventListener("click",()=> displayTasks("notes"))
  projectForm.addEventListener("submit",(event) => handleProjectFormSubmit(event))
  addProjectIcon.addEventListener("click", ()=>displayForm('projectForm'));
  taskForm.addEventListener("submit",(event)=>handleTaskFormSubmit(event));
  editTaskForm.addEventListener("submit",(event)=>handleEditTaskForm(event));
  addNoteForm.addEventListener("submit",(event)=>handleNoteForm(event));
  addNoteIcon.addEventListener("click",()=>displayForm('noteForm'));
});

  
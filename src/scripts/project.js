import deleteIcon from "../img/delete.svg";
import editIcon from "../img/edit.svg";
import addIcon from "../img/add.svg";
import { displayForm } from "./formHandling";

const projects = document.getElementById("projects");
const board = document.getElementById('board');
export let projectTasks = {};
export let currentProjectID = null;

export function createProjectElement(projectName) {
  const projectId = crypto.randomUUID();
  const project = document.createElement("div");
  projectTasks[projectId] = [];

  project.id = projectId;
  projectTasks[projectId] = [];
  project.className = "project";

  project.innerHTML = `<div class="project-header">
      <h2 data-action="displayTasks"></h2>
      <div class="project-header-icons">
        <img src="${deleteIcon}" alt="delete icon" class="delete icon" data-action="delete">
        <img src="${editIcon}" alt="edit icon" class="edit icon" data-action="edit">
        <img src="${addIcon}" alt="add icon" class="add icon" data-action="add">
      </div>
    </div>`;  

  // Safely insert the task name to avoid XSS
  project.querySelector("h2").textContent = projectName;
  // Add one event listener to the icon container
  const iconContainer = project.querySelector(".project-header");
  iconContainer.addEventListener("click", (event) => addFunctionality(event, projectId));
  projects.appendChild(project);
}

// Calls a method depending on the element clicked
function addFunctionality(event,elementID) {
  const actionableElement = event.target.closest("[data-action]");
  // Just in case. You never know!
  if (!actionableElement) return;

  const action = actionableElement.dataset.action;

  switch (action) {
    case "displayTasks":
      displayTasks(elementID);
      break;
    case "delete":
      handleDelete(elementID);
      break;
    case "edit":
      handleEdit(elementID);
      break;
    case "add":
      handleAdd(elementID);
      break;
    default:
      alert("This is not a valid button!");
  }
}


export function displayTasks(elementID) {
  currentProjectID =  elementID;
  console.log('Displaying tasks');
  board.innerHTML = ''; 
  for (let i = 0; i < projectTasks[currentProjectID].length; i++) {
    board.appendChild(projectTasks[currentProjectID][i]);
    
  }

  
}

function handleDelete(projectID) {
  console.log("Deleting project...");
  document.getElementById(projectID).remove();
}

function handleEdit() {
  console.log("Editing project...");
}
// Variables for the handleAdd function


function handleAdd(elementID) {
  
  displayForm('taskForm');
  
  currentProjectID = elementID;
}


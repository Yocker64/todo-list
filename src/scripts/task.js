import deleteIcon from "../img/delete.svg";
import editIcon from "../img/edit.svg";
import { currentProjectID } from "./project";


export function createTaskElement(taskName) {
  const parentProject = document.getElementById(currentProjectID);
  const taskId = crypto.randomUUID();
  const task = document.createElement("div");
  task.id = taskId;
  task.className = "task";

  task.innerHTML = `<div class="task-header">
      <h3></h3>
      <div class="task-header-icons">
        <img src="${deleteIcon}" alt="delete icon" class="delete icon" data-action="delete">
        <img src="${editIcon}" alt="edit icon" class="edit icon" data-action="edit">
      </div>
    </div>`;  

  // Safely insert the task name to avoid XSS
  task.querySelector("h3").textContent = taskName;
  // Add one event listener to the icon container
  const iconContainer = task.querySelector(".task-header-icons");
  iconContainer.addEventListener("click", (event) => addFunctionality(event, taskId));
  parentProject.appendChild(task);
}

// Calls a method depending on the img clicked
function addFunctionality(event,elementID) {
  const imgButton = event.target.closest("img");
  // Just in case; you never know.
  if (!imgButton) return;

  const action = imgButton.dataset.action;

  switch (action) {
    case "delete":
      handleDelete(elementID);
      break;
    case "edit":
      handleEdit();
      break;
    case "add":
      handleAdd();
      break;
    default:
      alert("This is not a valid button!");
  }
}

function handleDelete(projectID) {
  console.log("Deleting project...");
  document.getElementById(projectID).remove();
}

function handleEdit() {
  console.log("Editing project...");
}

function handleAdd() {
  console.log("Adding something...");
}


import deleteIcon from "../img/delete.svg";
import editIcon from "../img/edit.svg";
import { currentProjectID, projectTasks, displayTasks } from "./project";


export function createTaskElement(taskName,taskDesc, taskDueDate) {


  const taskId = crypto.randomUUID();
  const task = document.createElement("div");
  task.id = taskId;
  task.className = "task";

  task.innerHTML = `
      <h3></h3>
      <p class='taskDesc'></p>
      <p class='taskDueDate'></p>
      <div class="task-icons">
        <img src="${deleteIcon}" alt="delete icon" class="delete icon" data-action="delete">
        <img src="${editIcon}" alt="edit icon" class="edit icon" data-action="edit">
      </div>`;  

  // Safely insert the task name to avoid XSS
  task.querySelector("h3").textContent = taskName;
  task.querySelector('.taskDesc').textContent =taskDesc;
  task.querySelector('.taskDueDate').textContent = taskDueDate
  // Add one event listener to the icon container
  const iconContainer = task.querySelector(".task-icons");
  iconContainer.addEventListener("click", (event) => addFunctionality(event, taskId));
  projectTasks[currentProjectID].push(task);
  displayTasks(currentProjectID)
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

    default:
      alert("This is not a valid button!");
  }
}

function handleDelete(taskID) {
  console.log("Deleting project...");
  document.getElementById(taskID).remove();
}

function handleEdit() {
  console.log("Editing project...");
}

 


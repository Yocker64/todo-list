import deleteIcon from "../img/delete.svg";
import editIcon from "../img/edit.svg";
import { displayEditTaskForm } from "./formHandling";
import { currentProjectID, projectTasks, displayTasks } from "./project";

export let currentTaskID = null;

export function createTaskElement(taskName,taskDesc, taskDueDate, importance) {


  const taskId = crypto.randomUUID();
  const task = document.createElement("div");
  task.id = taskId;
  task.className = "task";

  task.innerHTML = `
      <h3></h3>
      <p class='taskDesc'></p>
      <p class='taskDueDate'></p>
      <p class = 'importance'></p>
      <div class="task-icons">
      <p class ='status'>Not Done</p>
        <img src="${deleteIcon}" alt="delete icon" class="delete icon" data-action="delete">
        <img src="${editIcon}" alt="edit icon" class="edit icon" data-action="edit">
      </div>`;  

  // Safely insert the task name to avoid XSS
  task.querySelector("h3").textContent = taskName;
  task.querySelector('.taskDesc').textContent =taskDesc;
  task.querySelector('.taskDueDate').textContent = taskDueDate;
  task.querySelector('.importance').textContent = importance

  let status = task.querySelector('.status');
  status.style.backgroundColor = "red";
  status.addEventListener('click',()=>changeStatus(status));
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
      handleEdit(elementID);
      break;

    default:
      alert("This is not a valid button!");
  }
}

function handleDelete(taskID) {
  document.getElementById(taskID).remove();
}

function handleEdit(taskID) {
  console.log("Editing project...");
  displayEditTaskForm();
  currentTaskID =  taskID;
}

 

function changeStatus(statusDiv) {
  if (statusDiv.innerText == "Not Done") {
    statusDiv.style.backgroundColor = 'green'
    statusDiv.textContent = "Done"
  }else{
    statusDiv.style.backgroundColor = "red";
    statusDiv.textContent = "Not Done"
  }
}
import deleteIcon from "../img/delete.svg";
import editIcon from "../img/edit.svg";
import addIcon from "../img/add.svg";

const projects = document.getElementById("projects");

export function createProjectElement(projectName) {
  const projectId = crypto.randomUUID();
  const project = document.createElement("div");
  project.id = projectId;
  project.className = "project";

  project.innerHTML = `<div class="project-header">
      <h2></h2>
      <div class="project-header-icons">
        <img src="${deleteIcon}" alt="delete icon" class="delete icon" data-action="delete">
        <img src="${editIcon}" alt="edit icon" class="edit icon" data-action="edit">
        <img src="${addIcon}" alt="add icon" class="add icon" data-action="add">
      </div>
    </div>`;

  // Safely insert the task name to avoid XSS
  project.querySelector("h2").textContent = projectName;
  // Add one event listener to the icon container
  const iconContainer = project.querySelector(".project-header-icons");
  iconContainer.addEventListener("click", (event) => addFunctionality(event, projectId));
  projects.appendChild(project);
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

export function createTaskElement(taskName) {

}

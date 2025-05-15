import { createProjectElement } from "./project";
import { createTaskElement, currentTaskID } from "./task";
import { createNoteElement } from "./note";
import { format, compareAsc } from "date-fns";
// Getting the important elements from the HTML

// Displays and adds event listeners to hide the addProject/addTask form
export function displayForm(formName) {
  let popup = document.getElementById(formName);
  const closeButton = popup.querySelector(".close");

  popup.style.display = "block";
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

// Adds new project to the side bar when button is pressed
export function handleProjectFormSubmit(event) {
  let projectPopUp = document.getElementById("projectForm");

  event.preventDefault(); // Prevenst page from reloading when the submit button is pressed
  let projectName = document.getElementById("projectName");
  createProjectElement(projectName.value);
  projectName.value = "";

  projectPopUp.style.display = "none";
}



export function handleTaskFormSubmit(event) {
  let taskPopUp = document.getElementById("taskForm");

  event.preventDefault(); // Prevenst page from reloading when the submit button is pressed
  let taskName = document.getElementById("taskName");
  let taskDueDate = document.getElementById("taskDueDate");
  let taskDesc = document.getElementById("taskDesc");
  let taskImportance = document.getElementById("importance");
  createTaskElement(
    taskName.value,
    taskDesc.value,
    format(taskDueDate.value,"MMM/dd/yyyy"),
    taskImportance.value
  );
  taskName.value = "";
  taskDesc.value = "";
  taskDueDate.value = "";
  taskPopUp.style.display = "none";
}


export function handleEditTaskForm(event) {

  let editTaskPopUp = document.getElementById("editTaskForm");
  event.preventDefault(); // Prevenst page from reloading when the submit button is pressed
  let editTaskName = document.getElementById("editTaskName").value;
  let editTaskDueDate = format(document.getElementById("editTaskDueDate").value,"MM/dd/yyyy");
  let editTaskDesc = document.getElementById("editTaskDesc").value;
  let editTaskImportance = document.getElementById("editImportance").value;

  let currentTask = document.getElementById(currentTaskID);

  currentTask.querySelector("h3").textContent = editTaskName;
  currentTask.querySelector(".taskDesc").textContent = editTaskDesc;
  currentTask.querySelector(".taskDueDate").textContent = editTaskDueDate;

  currentTask.querySelector(".importance").textContent = editTaskImportance;

  editTaskName = "";
  editTaskDesc = "";
  editTaskDueDate = "";
  editTaskPopUp.style.display = "none";
}

export function handleNoteForm(event) {
  let popUp = document.getElementById("noteForm");

  event.preventDefault(); // Prevenst page from reloading when the submit button is pressed
  let noteName = document.getElementById("noteName");
  let noteDesc = document.getElementById("noteDesc");
  createNoteElement(
    noteName.value,
    noteDesc.value,

  );
  taskName.value = "";
  taskDesc.value = "";
  popUp.style.display = "none";
}
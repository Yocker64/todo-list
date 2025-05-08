import { createProjectElement } from "./project";
import { createTaskElement } from "./task";

// Getting the important elements from the HTML



// Displays and adds event listeners to hide the addProject/addTask form
export function displayForm(formName) {
    let popup = document.getElementById(formName);
const closeButton = popup.querySelector('.close');

    popup.style.display = 'block';
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
    let projectName = document.getElementById('projectName');
    let projectDueDate = document.getElementById("projectDueDate");
    createProjectElement(projectName.value);
    projectName.value = '';
  
    projectDueDate.value = '';
    projectPopUp.style.display = 'none';
}

export function handleTaskFormSubmit(event,parentID) {
  let taskPopUp = document.getElementById('taskForm');

  event.preventDefault(); // Prevenst page from reloading when the submit button is pressed
  let taskName = document.getElementById('taskName');
  let taskDueDate = document.getElementById("taskDueDate");
  createTaskElement(taskName.value,parentID);
  taskName.value = '';
  taskDueDate.value = '';
  taskPopUp.style.display = 'none';
}

// const form = document.getElementById("taskForm");

//   // Show popup


//   // Close popup when clicking "x"
//   closeButton.addEventListener("click", () => {
//     popup.style.display = "none";
//   });

//   // Close popup when clicking outside the form
//   window.addEventListener("click", (event) => {
//     if (event.target === popup) {
//       popup.style.display = "none";
//     }
//   });
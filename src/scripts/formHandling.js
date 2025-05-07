import { createProjectElement } from "./project";

// Getting the important elements from the HTML
const projectPopUp = document.getElementById("projectForm");
const popup = document.querySelector(".pop-up");
const closeButton = document.querySelector('#closeProjectForm');

// Displays and adds event listeners to hide the add project form
export function displayAddProjectForm() {
    projectPopUp.style.display = 'block';
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
export function handleFormSubmit(event) {
    event.preventDefault(); // Prevenst page from reloading when the submit button is pressed
    let projectName = document.getElementById('projectName');
    let projectDueDate = document.getElementById("projectDueDate");
    createProjectElement(projectName.value);
    projectName.value = '';
    projectDueDate.value = 'null';
    projectPopUp.style.display = 'none';
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
import { createProjectElement } from "./project";

// Getting the important elements from the HTML



// Displays and adds event listeners to hide the add project form
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
export function handleFormSubmit(event,formName) {
    let projectPopUp = document.getElementById(formName);

    event.preventDefault(); // Prevenst page from reloading when the submit button is pressed
    let projectName = document.getElementById('projectName');
    let projectDueDate = document.getElementById("projectDueDate");
    createProjectElement(projectName.value);
    projectName.value = '';
    projectDueDate.value = '';
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
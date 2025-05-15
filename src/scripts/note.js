import { projectTasks } from "./project";
import deleteIcon from "../img/delete.svg";
import editIcon from "../img/edit.svg";

projectTasks["notes"] = {};

export function createNoteElement(noteName,noteDesc) {



  const noteId = crypto.randomUUID();
    const note = document.createElement("div");

  
    note.id = noteId;
    
    note.className = "task";
  
    note.innerHTML = `<div class="note-header">
        <h3></h3>
        <p class="taskDesc">
        <div class="task-header-icons">
          <img src="${deleteIcon}" alt="delete icon" class="delete icon" data-action="delete">
          <img src="${editIcon}" alt="edit icon" class="edit icon" data-action="edit">
        </div>
      </div>`;  
  
    // Safely insert the task name to avoid XSS
    note.querySelector("h3").textContent = noteName;
    note.querySelector(".taskDesc").textContent = noteDesc;
    // Add one event listener to the icon container
    const iconContainer = note.querySelector(".task-header-icons");
  iconContainer.addEventListener("click", (event) => addFunctionality(event, noteId));
projectTasks["notes"][noteId] = note;
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
  console.log(projectTasks["notes"]);
  
  document.getElementById(taskID).remove();
  delete projectTasks["notes"][taskID]
}

function handleEdit(taskID) {
  console.log("Editing project...");
  displayForm("editTaskForm");
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
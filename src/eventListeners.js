import { showProject, showTodo } from "./dom";
import { addProject, addTodo } from "./fuctions";
import { Project, todo } from "./task";
import { createItem, readItem, updateItem, clearStorage } from "./storage";

let Todo = todo;

function mark() {
  // Checkbox if checked that will be crossed then mark them as completed
  let checkboxes = document.querySelectorAll(".Done");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      let todoDiv = checkbox.closest(".todoDiv");
      if (checkbox.checked) {
        todoDiv.classList.add("strike");
      } else {
        todoDiv.classList.remove("strike");
      }
    });
  });
}

// function removeTodo() {
//   // Delete button if clicked the todo will be deleted
//   let removeButton = document.querySelectorAll(".remove");
//   removeButton.forEach((removeButton) => {
//     removeButton.addEventListener("click", (event) => {
//       let todoDiv = removeButton.closest(".todoDiv");
//       todoDiv.remove();
//     });
//   });
// }

function removeTodo() {
  // Delete button if clicked the todo will be deleted
  let removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
      // Find the todo div
      let todoDiv = removeButton.closest(".todoDiv");
      
      // Find the project name associated with the todo
      let projectName = document.querySelector(".projectShow").textContent;
      
      // Find the project instance based on the project name
      let projectsList = readItem();
      let project = projectsList.find((project) => project.name === projectName);
      
      // Find the index of the todo in the project's todo array
      let todoIndex = project.todo.findIndex((todo) => todo.title === todoDiv.querySelector("p:first-child").textContent);
      
      // If the todo index is found, remove the todo from the project's todo array
      if (todoIndex !== -1) {
        project.todo.splice(todoIndex, 1);

        // Update the local storage with the modified projects list
        updateItem(projectsList);
      }

      // Remove the todo div from the DOM
      todoDiv.remove();
    });
  });
}


function changeTodo() {
  // if list of projects been clicked change the project todo task for upon that projects tasks
  let projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("click", (event) => {
      let projectName = project.textContent;

      projects.forEach((p) => p.classList.remove("projectShow"));

      project.classList.add("projectShow");

      showTodo(projectName);

      // After changing todo adding event listeners to each
      mark();
      removeTodo();
    });
  });
}

function openForm() {
  let todoButton = document.querySelector(".formAdd");
  todoButton.addEventListener("click", (event) => {
    let addClass = document.querySelector(".FormContainer");
    addClass.classList.add("active");
  });
}

function closeForm() {
  let cancelButton = document.querySelector(".cancel");

  cancelButton.addEventListener("click", (event) => {
    let addClass = document.querySelector(".FormContainer");
    addClass.classList.remove("active");
  });
}

function listen() {
  // Checkbox if checked that will be crossed then mark them as completed
  mark();

  // Todo delete the todo of the project
  removeTodo();

  // changing toto after going to another project and setting their todo
  changeTodo();

  // if button is clicked form will show up to fill form requirement and add them
  openForm();

  // if cancel button is clicked the form will be closed without being adding any todo to project
  closeForm();

  // function to add todo tasks in the project
  addTodoForm();
}

function addNewProject() {
  // if project buttons is clicked add new project to projects array
  let projectButtons = document.querySelector(".ProjectButton");

  // Add event listener to the button
  projectButtons.addEventListener("click", (event) => {
  event.preventDefault();

  // Get the project name from the input field
  let projectName = document.querySelector(".ProjectInput").value;

  // Add the project to the projects array
  addProject(projectName);

  // Remove Projects class to remove all listed project
  let projectsClass = document.querySelector(".projects");
  projectsClass.remove();

  // Re-show all projects
  showProject();

  // showing todo of newly formed project
  showTodo(projectName);

  // Clear the input field
  document.querySelector(".ProjectInput").value = "";

  // adding event listeners to each project 
  changeTodo();
});
}

function addTodoForm() {
  let submitButton = document.querySelector(".add");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let date = document.querySelector("#DueDate").value;
    let description = document.querySelector("#description").value;
    let priority = document.querySelector("#priority").value;

    let todo = new Todo(title, description, date, priority);

    let projectNameElement = document.querySelector(".projectShow");
    if (projectNameElement) {
      let projectName = projectNameElement.textContent;
      console.log("Project Name:", projectName); // Debugging output
      addTodo(projectName, todo);
      showTodo(projectName);

      let addClass = document.querySelector(".FormContainer");
      addClass.classList.remove("active");
    } else {
      console.error("No project selected.");
    }

    // Clear the input field
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";

    mark();
    removeTodo();
  });
}

export { listen, addNewProject };

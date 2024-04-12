import { todo, Project } from "./task.js";
import { addProject, projectsList, addTodo } from "./fuctions";
import { createItem, readItem, updateItem } from "./storage";


let body = document.querySelector("body");
let left = document.querySelector("#left");
let right = document.querySelector("#Right");

function left_side() {
  // Create a div to contain the form
  let divInput = document.createElement("div");

  // Create the form element
  let form = document.createElement("form");
  form.classList.add("ProjectForm");

  // Create the input element for project name
  let input = document.createElement("input");
  input.type = "text";
  input.classList.add("ProjectInput");
  input.placeholder = "Add New Project";

  // Create the submit button
  let button = document.createElement("button");
  button.type = "submit";
  button.classList.add("ProjectButton");
  button.textContent = "Add";

  // Append the input and button elements to the form
  form.appendChild(input);
  form.appendChild(button);

  // Append the form to the div
  divInput.appendChild(form);

  // Append the div to the left side of the page
  left.appendChild(divInput);
}

// before adding local storage 
// function showProject() {
//   let projectDiv = document.createElement("div");
//   projectDiv.classList.add("projects");

//   projectsList.forEach((project) => {
//     let projectElement = document.createElement("p");
//     projectElement.classList.add("project");
//     projectElement.textContent = project.name;
//     projectDiv.appendChild(projectElement);
//   });

//   left.appendChild(projectDiv);
// }

function showProject() {
  // Retrieve the projects list from local storage
  let projects = readItem() || [];

  // Clear the existing project list displayed on the DOM
  let projectDiv = document.querySelector(".projects");
  if (projectDiv) {
    projectDiv.remove();
  }

  // Create a new div element to contain the list of projects
  projectDiv = document.createElement("div");
  projectDiv.classList.add("projects");

  // Create a set to keep track of unique project names
  let uniqueProjects = new Set();

  // Iterate over each project in the projects list
  projects.forEach((project) => {
    // Check if the project name already exists in the set
    if (!uniqueProjects.has(project.name)) {
      // If the project name is unique, create a paragraph element for it
      let projectElement = document.createElement("p");
      projectElement.classList.add("project");
      projectElement.textContent = project.name;
      projectDiv.appendChild(projectElement);

      // Add the project name to the set
      uniqueProjects.add(project.name);
    } else {
      // If the project name already exists, log a message
      console.log(`Project '${project.name}' already exists.`);
    }
  });

  // Append the project list to the left side of the page
  left.appendChild(projectDiv);
}


let right_side = () => {
  let div = document.createElement("div");
  div.classList.add("rightSideTop");

  let heading = document.createElement("h3");
  heading.textContent = "ToDo List";

  let button = document.createElement("button");
  button.textContent = "Add New Todo +";
  button.classList.add("formAdd");

  div.appendChild(heading);
  div.appendChild(button);
  right.appendChild(div);
};

// this is before adding local storage 
// function showTodo(projectName) {
//   // Find the project instance based on the project name
//   let project = projectsList.find((project) => project.name === projectName);

//   // Add 'projectShow' class to the project matching the projectName
//   function mark() {
//     let projects = document.querySelectorAll(".project");
//     projects.forEach((project) => {
//       if (project.textContent === projectName) {
//         project.classList.add("projectShow");
//       } else {
//         project.classList.remove("projectShow");
//       }
//     });
//   }

//   mark();

//   // If the project is found, display its todo items
//   if (project) {
//     // Remove previous projects todo
//     let todo = document.querySelectorAll(".todoDiv");
//     todo.forEach((todo) => {
//       todo.remove();
//     });

//     project.todo.forEach((todoItem) => {
//       // Dividing into different part for better looks
//       let todoContainer = document.createElement("div");
//       todoContainer.classList.add("todoDiv");
//       right.appendChild(todoContainer);

//       let firstLine = document.createElement("div");
//       firstLine.classList.add("firstLine");
//       todoContainer.appendChild(firstLine);

//       let secondLine = document.createElement("div");
//       secondLine.classList.add("secondLine");
//       todoContainer.appendChild(secondLine);

//       // Main part
//       // Line First
//       let todoTitle = document.createElement("p");
//       todoTitle.textContent = todoItem.title;
//       firstLine.appendChild(todoTitle);

//       let todoDueDate = document.createElement("p");
//       todoDueDate.textContent = todoItem.dueDate;
//       firstLine.appendChild(todoDueDate);

//       const checkbox = document.createElement("input");
//       checkbox.type = "checkbox";
//       checkbox.classList.add("Done");
//       todoDueDate.appendChild(checkbox);

//       // Line second
//       let todoDescription = document.createElement("p");
//       todoDescription.textContent = todoItem.description;
//       secondLine.appendChild(todoDescription);

//       let todoPriority = document.createElement("p");
//       todoPriority.textContent = "Priority: " + todoItem.priority;
//       secondLine.appendChild(todoPriority);

//       const span = document.createElement("span");
//       span.innerHTML = "&#128465;";
//       span.classList.add("remove");
//       todoPriority.appendChild(span);
//     });
//   }
// }


function showTodo(projectName) {
  // this is after adding local storage 
  // Retrieve the projects list from local storage
  let projects = readItem();

  // Find the project instance based on the project name
  let project = projects.find((proj) => proj.name === projectName);

  // Add 'projectShow' class to the project matching the projectName
  function mark() {
    let projects = document.querySelectorAll(".project");
    projects.forEach((proj) => {
      if (proj.textContent === projectName) {
        proj.classList.add("projectShow");
      } else {
        proj.classList.remove("projectShow");
      }
    });
  }

  mark();

  // If the project is found, display its todo items
  if (project) {
    // Clear the existing todo items displayed on the DOM
    let todoContainer = document.querySelector("#Right");
    todoContainer.innerHTML = "";

    // Iterate over each todo item in the project's todo array
    project.todo.forEach((todoItem) => {
      // Create divs for better organization
      let todoDiv = document.createElement("div");
      todoDiv.classList.add("todoDiv");
      todoContainer.appendChild(todoDiv);

      let firstLine = document.createElement("div");
      firstLine.classList.add("firstLine");
      todoDiv.appendChild(firstLine);

      let secondLine = document.createElement("div");
      secondLine.classList.add("secondLine");
      todoDiv.appendChild(secondLine);

      // Main part
      // Line First
      let todoTitle = document.createElement("p");
      todoTitle.textContent = todoItem.title;
      firstLine.appendChild(todoTitle);

      let todoDueDate = document.createElement("p");
      todoDueDate.textContent = todoItem.dueDate;
      firstLine.appendChild(todoDueDate);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("Done");
      todoDueDate.appendChild(checkbox);

      // Line second
      let todoDescription = document.createElement("p");
      todoDescription.textContent = todoItem.description;
      secondLine.appendChild(todoDescription);

      let todoPriority = document.createElement("p");
      todoPriority.textContent = "Priority: " + todoItem.priority;
      secondLine.appendChild(todoPriority);

      const removeButton = document.createElement("span");
      removeButton.innerHTML = "&#128465;";
      removeButton.classList.add("remove");
      secondLine.appendChild(removeButton);

      // Add event listener to remove the todo item when clicked
      removeButton.addEventListener("click", () => {
        // Find the index of the todo item in the project's todo array
        const index = project.todo.indexOf(todoItem);
        // Remove the todo item from the array
        if (index !== -1) {
          project.todo.splice(index, 1);
          // Update local storage after removing the todo item
          updateItem(projects);
          // Refresh the displayed todo items
          showTodo(projectName);
        }
      });
    });
  } else {
    console.log(`Project '${projectName}' not found.`);
  }
}



export { left_side, right_side, showProject, showTodo };

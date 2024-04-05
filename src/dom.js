import { todo, Project } from "./task.js";
import { addProject, projectsList, addTodo } from "./fuctions";

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

function showProject() {
  let projectDiv = document.createElement("div");
  projectDiv.classList.add("projects");

  projectsList.forEach((project) => {
    let projectElement = document.createElement("p");
    projectElement.classList.add("project");
    projectElement.textContent = project.name;
    projectDiv.appendChild(projectElement);
  });

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

function showTodo(projectName) {
  // Find the project instance based on the project name
  let project = projectsList.find((project) => project.name === projectName);

  // Add 'projectShow' class to the project matching the projectName
  function mark() {
    let projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      if (project.textContent === projectName) {
        project.classList.add("projectShow");
      } else {
        project.classList.remove("projectShow");
      }
    });
  }

  mark();

  // If the project is found, display its todo items
  if (project) {
    // Remove previous projects todo
    let todo = document.querySelectorAll(".todoDiv");
    todo.forEach((todo) => {
      todo.remove();
    });

    project.todo.forEach((todoItem) => {
      // Dividing into different part for better looks
      let todoContainer = document.createElement("div");
      todoContainer.classList.add("todoDiv");
      right.appendChild(todoContainer);

      let firstLine = document.createElement("div");
      firstLine.classList.add("firstLine");
      todoContainer.appendChild(firstLine);

      let secondLine = document.createElement("div");
      secondLine.classList.add("secondLine");
      todoContainer.appendChild(secondLine);

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

      const span = document.createElement("span");
      span.innerHTML = "&#128465;";
      span.classList.add("remove");
      todoPriority.appendChild(span);
    });
  } else {
    todoContainer.textContent = "Add one";
  }
}

export { left_side, right_side, showProject, showTodo };

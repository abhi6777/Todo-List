import { todo, Project } from "./task.js";
import { addProject, projectsList, addTodo } from "./fuctions";

let body = document.querySelector("body");
let left = document.querySelector("#left");
let right = document.querySelector("#Right");

let left_side = () => {
  let addButton = document.createElement("h4");
  addButton.innerHTML = "Add Projects";

  let link = document.createElement("a");
  link.href = "#";

  let linkImg = document.createElement("img");
  linkImg.src = require("./add-button.png");
  linkImg.classList.add("image");

  let createDiv = document.createElement("div");
  createDiv.classList.add("leftDiv");
  left.appendChild(createDiv);

  link.appendChild(addButton);
  link.appendChild(linkImg);
  createDiv.appendChild(link);
};

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
  let heading = document.createElement("h3");
  heading.textContent = "ToDo List";

  right.appendChild(heading);
};

function showTodo(projectName) {
  // Find the project instance based on the project name
  let project = projectsList.find((project) => project.name === projectName);

  // If the project is found, display its todo items
  if (project) {
    // Remove previous projects todo
    let todo = document.querySelectorAll(".todoDiv");
    todo.forEach(todo => {
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

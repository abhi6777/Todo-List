import { todo, Project } from "./task.js";

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

let showProject = () => {
  let projectDiv = document.createElement("div");
  projectDiv.classList.add("projects");

  let myProject = new Project("My Project");
  projectDiv.innerHTML = Project.todo[0].title;

  left.appendChild(projectDiv);
};

let right_side = () => {
  let heading = document.createElement("h3");
  heading.textContent = "ToDo List";

  right.appendChild(heading);
};

export { left_side, right_side, showProject };

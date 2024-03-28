import { left_side, right_side, showProject } from "./dom";
import { Project, todo } from "./task";
import { addProject, projectsList, addTodo } from "./fuctions";
import { showTodo } from "./dom";

let body = document.querySelector("body");

// Create a new project
addProject("myProject");
addProject("Hello");
addProject("Hii");

console.log(projectsList);

// Create a new todo item
let todo1 = new todo(
  "Complete project",
  "Finish coding tasks",
  "2024-03-20",
  "High"
);

let todo2 = new todo(
  "10min Exercise",
  "Morning Exercise Be on Track",
  "2024-03-20",
  "High"
);

// Push the todo item to the project's todo array
addTodo("myProject", todo1);
addTodo("myProject", todo2);

// Display project on dom
left_side();
right_side();
showProject();
showTodo("myProject");
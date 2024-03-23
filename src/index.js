import { left_side, right_side, showProject } from "./dom";
import { Project, todo } from "./task";

let body = document.querySelector("body");
// Creating a new project and adding todo items to it
let myProject = new Project("My Project");

// Creating new todo items
let todo1 = new todo(
  "Complete project",
  "Finish coding tasks",
  "2024-03-20",
  "High"
);
let todo2 = new todo(
  "Study for exam",
  "Review study materials",
  "2024-03-25",
  "Medium"
);
myProject.todo.push(todo1);
myProject.todo.push(todo2);

left_side();
right_side();
showProject();

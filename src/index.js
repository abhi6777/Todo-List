import { left_side, right_side, showProject } from "./dom";
import { Project, todo } from "./task";
import { addProject, projectsList, addTodo } from "./fuctions";
import { showTodo } from "./dom";
import { listen, addNewProject } from "./eventListeners";
import { form } from "./form";
import "../src/form.css"
import "../src/style.css"

let body = document.querySelector("body");

// Create a new project
addProject("myProject");
addProject("Hello");
addProject("Hii");

// console.log(projectsList);

function myProjectItems() {
  let currentDate = new Date().toISOString().split("T")[0];

  // Create a new todo item
  let todo1 = new todo(
    "Complete project",
    "Finish coding tasks",
    currentDate,
    "High"
  );

  let todo2 = new todo(
    "10min Exercise",
    "Morning Exercise Be on Track",
    currentDate,
    "High"
  );

  let todo3 = new todo("study 1 Chapter", "Any book", currentDate, "High");

  let todo4 = new todo(
    "study 1 Chapter of college textBook",
    "To maintain study",
    currentDate,
    "High"
  );

  let todo5 = new todo(
    "Write code at least 1 Hour",
    "To maintain consistency",
    currentDate,
    "High"
  );

  // Push the todo item to the project's todo array
  addTodo("myProject", todo1);
  addTodo("myProject", todo2);
  addTodo("myProject", todo3);
  addTodo("myProject", todo4);
  addTodo("myProject", todo5);
}

function HelloItems() {
  let currentDate = new Date().toISOString().split("T")[0];

  // Create a new todo item
  let todo1 = new todo(
    "Do ToDo Project",
    "Finish coding tasks",
    currentDate,
    "High"
  );

  let todo2 = new todo(
    "10 min Exercise",
    "Morning Exercise Be on Track",
    currentDate,
    "High"
  );

  let todo3 = new todo("study 1 Chapter", "Any book", currentDate, "High");

  let todo4 = new todo(
    "study 1 Chapter of college textBook",
    "To maintain study",
    currentDate,
    "High"
  );

  let todo5 = new todo(
    "Write code at least 1 Hour",
    "To maintain consistency",
    currentDate,
    "medium"
  );

  // Push the todo item to the project's todo array
  addTodo("Hello", todo1);
  addTodo("Hello", todo2);
  addTodo("Hello", todo3);
  addTodo("Hello", todo4);
  addTodo("Hello", todo5);
}

// this is too add todo items in projects
myProjectItems();
HelloItems();


// Display project on dom
left_side();
right_side();
showProject();
showTodo("myProject");
addNewProject();
form();
listen();

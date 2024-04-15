import { left_side, right_side, showProject } from "./dom";
import { Project, todo } from "./task";
// removed import projectList array from importing after implimenting local storage
import { addProject, addTodo, priorityColor } from "./fuctions";
import { showTodo } from "./dom";
import { listen, addNewProject } from "./eventListeners";
import { form } from "./form";
import "../src/form.css"
import "../src/style.css"
import { createItem, readItem, updateItem, clearStorage } from "./storage";
import { updateForm } from "./updateForm";


let body = document.querySelector("body");

// console.log(readItem());
// console.log(projectsList);
// clearStorage();

function myProjectItems() {
  let currentDate = new Date().toISOString().split("T")[0];

  // Create a new todo item
  let todo1 = new todo(
    "Complete project",
    "Finish coding tasks",
    currentDate,
    "Low"
  );

  let todo2 = new todo(
    "10min Exercise",
    "Morning Exercise Be on Track",
    currentDate,
    "Medium"
  );

  let todo3 = new todo("study 1 Chapter", "Any book", currentDate, "High");

  let todo4 = new todo(
    "study 1 Chapter of college textBook",
    "To maintain study",
    currentDate,
    "Low"
  );

  let todo5 = new todo(
    "Write code at least 1 Hour",
    "To maintain consistency",
    currentDate,
    "Medium"
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
    "Low"
  );

  let todo2 = new todo(
    "10 min Exercise",
    "Morning Exercise Be on Track",
    currentDate,
    "Medium"
  );

  let todo3 = new todo("study 1 Chapter", "Any book", currentDate, "High");

  let todo4 = new todo(
    "study 1 Chapter of college textBook",
    "To maintain study",
    currentDate,
    "Low"
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

// Check if there are existing projects in local storage
const existingProjects = readItem();

if (!existingProjects) {
  // Create a new project
  addProject("myProject");
  addProject("Hello");
  addProject("Hii");
  // Add initial projects only if there are no existing projects in local storage
  myProjectItems();
  HelloItems();
};


// Display project on dom
left_side();
right_side();
showProject();
showTodo("myProject");
addNewProject();
form();
updateForm();
priorityColor();
listen();

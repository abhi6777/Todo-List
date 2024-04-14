import { todo,Project } from "./task";
import { createItem, readItem, updateItem } from "./storage";

// Array to store the projects name 
let projectsList = [];

// old addproject before adding local storage function
// Function to add a new project dynamically
// function addProject(projectName) {
//      // Create a new instance of the Project class with the provided name
//      let newProject = new Project(projectName);
     
//      // Push the new project to the array of projects
//      projectsList.push(newProject);
//    };


// new addproject function 
function addProject(projectName) {
  // Retrieve the current projects list from local storage
  let projects = readItem();
  if (projects == projectName) {
    return console.log("already exists");
  }

  // If there are no existing projects, initialize an empty array
  if (!projects) {
    projects = [];
  }
  
  // Create a new instance of the Project class with the provided name
  let newProject = new Project(projectName);
  // projectsList.push(newProject);
  
  // Push the new project to the projects array
  projects.push(newProject);
  
  // Update the projects list in local storage with the new project added
  updateItem(projects);
}

// Before adding local storage 
// function addTodo(projectName, todoItem) {
//      // Find the project instance based on the project name
//      let project = projectsList.find(project => project.name === projectName);
     
//      // If the project is found, push the todo item to its todo array
//      if (project) {
//        project.todo.push(todoItem);
//      } else {
//        console.log(`Project '${projectName}' not found.`);
//      }
//    }

function addTodo(projectName, todoItem) {
  // Retrieve the projects list from local storage
  let projects = readItem();

  // Find the project instance based on the project name
  let project = projects.find((project) => project.name === projectName);

  // If the project is found, push the todo item to its todo array
  if (project) {
    project.todo.push(todoItem);

    // Update the projects list in local storage with the new todo item added
    updateItem(projects);
  } else {
    console.log(`Project '${projectName}' not found.`);
  }
}

function priorityColor() {
  let priorities = document.querySelectorAll(".priority");
  priorities.forEach(priority => {
    let innerText = priority.textContent.toLowerCase();
    let todoDiv = priority.closest(".todoDiv");
    
    if (innerText.includes("high")) {
      todoDiv.style.backgroundColor = "#ba2929";
    } else if (innerText.includes("medium")) {
      todoDiv.style.backgroundColor = "#8d8f06";      
      todoDiv.querySelector(".remove").style.color = "red";
    } else {
      todoDiv.style.backgroundColor = "#058512";
    }
  });
}


// Removed projectList from export after adding the local storage 
export {addProject, addTodo, priorityColor};
   
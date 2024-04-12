import { todo,Project } from "./task";
import { createItem, readItem, updateItem } from "./storage";

// Array to store the projects name 
let projectsList = [];

// old addproject function
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
  let projects = readItem() || []; 
  // If no projects list exists, initialize it as an empty array
  
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
  let projects = readItem() || [];

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

   export {addProject, projectsList, addTodo};
   
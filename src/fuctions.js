import { todo,Project } from "./task";
import { createItem, readItem, updateItem } from "./storage";

// Array to store the projects name 
let projectsList = [];

// Function to add a new project dynamically
function addProject(projectName) {
     // Create a new instance of the Project class with the provided name
     let newProject = new Project(projectName);
     
     // Push the new project to the array of projects
     projectsList.push(newProject);


   };

function addTodo(projectName, todoItem) {
     // Find the project instance based on the project name
     let project = projectsList.find(project => project.name === projectName);
     
     // If the project is found, push the todo item to its todo array
     if (project) {
       project.todo.push(todoItem);
     } else {
       console.log(`Project '${projectName}' not found.`);
     }
   }
   

   export {addProject, projectsList, addTodo};
   
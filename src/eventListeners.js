import { showTodo } from "./dom";


function listen() {
     // Checkbox if checked that will be crossed 
     let checkboxes = document.querySelectorAll(".Done");
     checkboxes.forEach(checkbox => {
          checkbox.addEventListener("click", (event) => {
               let todoDiv = checkbox.closest(".todoDiv");
               if (checkbox.checked) {
                    todoDiv.classList.add("strike");
               } else {
                    todoDiv.classList.remove("strike");
               }
          });
     });     

     // Delete button if clicked the todo will be deleted 
     let removeButton = document.querySelectorAll(".remove");
     removeButton.forEach(removeButton => {
          removeButton.addEventListener("click", (event) => {
               let todoDiv = removeButton.closest(".todoDiv");
               todoDiv.remove();               
          });
     });

     // if list of projects been clicked change the project todo 
     let projects = document.querySelectorAll(".project");
          projects.forEach(project => {
          project.addEventListener("click", (event) => {
               let projectName = project.textContent;

               projects.forEach(p => p.classList.remove("projectShow"));

               project.classList.add("projectShow");

               showTodo(projectName);
          });
     });

}

export { listen }

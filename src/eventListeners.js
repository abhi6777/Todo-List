import { showProject, showTodo } from "./dom";
import { addProject } from "./fuctions";

function listen() {
  // Checkbox if checked that will be crossed
  let checkboxes = document.querySelectorAll(".Done");
  checkboxes.forEach((checkbox) => {
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
  removeButton.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
      let todoDiv = removeButton.closest(".todoDiv");
      todoDiv.remove();
    });
  });

  // if list of projects been clicked change the project todo
  let projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("click", (event) => {
      let projectName = project.textContent;

      projects.forEach((p) => p.classList.remove("projectShow"));

      project.classList.add("projectShow");

      showTodo(projectName);
    });
  });

  // if project buttons is clicked add new project to projects array
     let projectButtons = document.querySelectorAll(".ProjectButton");

          // Loop through each project button to add event listener
          projectButtons.forEach(button => {
          // Add event listener to the button
          button.addEventListener("click", (event) => {
          // Prevent the default form submission behavior
          event.preventDefault();

          // Get the project name from the input field
          let projectName = document.querySelector(".ProjectInput").value;

          // Add the project to the projects array
          addProject(projectName);

          // Clear the input field
          document.querySelector(".ProjectInput").value = "";
          
          // Remove all existing project list items
          let projectListItems = document.querySelectorAll(".project");
          projectListItems.forEach(item => item.remove());

          // Re-show all projects
          showProject();

     });
     });

}

export { listen };

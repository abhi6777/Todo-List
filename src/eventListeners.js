import { showProject, showTodo } from "./dom";
import { addProject, addTodo, priorityColor } from "./fuctions";
import { Project, todo } from "./task";
import { createItem, readItem, updateItem, clearStorage } from "./storage";

let Todo = todo;

function mark() {
  // Checkbox if checked that will be crossed then mark them as completed
  let checkboxes = document.querySelectorAll(".Done");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      let todoDiv = checkbox.closest(".todoDiv");
      if (checkbox.checked) {
        todoDiv.classList.add("strike");
        todoDiv.style.backgroundColor = "#0d0d0c";
      } else {
        todoDiv.classList.remove("strike");

       // Find the priority element inside the todoDiv
       let priorities = todoDiv.querySelector(".priority");
       let innerText = priorities.textContent.toLowerCase();        

       // Change the background color based on priority
       if (innerText.includes("high")) {
         todoDiv.style.backgroundColor = "#ba2929";
       } else if (innerText.includes("medium")) {
         todoDiv.style.backgroundColor = "#8d8f06";
         todoDiv.querySelector(".remove").style.color = "red";
       } else {
         todoDiv.style.backgroundColor = "#058512";
       }
      }
    });
  });
}

// function removeTodo() {
//   // Delete button if clicked the todo will be deleted
//   let removeButton = document.querySelectorAll(".remove");
//   removeButton.forEach((removeButton) => {
//     removeButton.addEventListener("click", (event) => {
//       let todoDiv = removeButton.closest(".todoDiv");
//       todoDiv.remove();
//     });
//   });
// }

function removeTodo() {
  // Delete button if clicked the todo will be deleted
  let removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
      // Find the todo div
      let todoDiv = removeButton.closest(".todoDiv");
      
      // Find the project name associated with the todo
      let projectName = document.querySelector(".projectShow").textContent;
      
      // Find the project instance based on the project name
      let projectsList = readItem();
      let project = projectsList.find((project) => project.name === projectName);
      
      // Find the index of the todo in the project's todo array
      let todoIndex = project.todo.findIndex((todo) => todo.title === todoDiv.querySelector("p:first-child").textContent);
      
      // If the todo index is found, remove the todo from the project's todo array
      if (todoIndex !== -1) {
        project.todo.splice(todoIndex, 1);

        // Update the local storage with the modified projects list
        updateItem(projectsList);
      }

      // Remove the todo div from the DOM
      todoDiv.remove();
    });
  });
}

function changeTodo() {
  // if list of projects been clicked change the project todo task for upon that projects tasks
  let projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("click", (event) => {
      let projectName = project.textContent;

      projects.forEach((p) => p.classList.remove("projectShow"));

      project.classList.add("projectShow");

      showTodo(projectName);

      // After changing todo adding event listeners to each
      mark();
      removeTodo();
      priorityColor();
      updateFormOpen();
    });
  });
}

function openForm() {
  let todoButton = document.querySelector(".formAdd");
  todoButton.addEventListener("click", (event) => {
    let addClass = document.querySelector(".FormContainer");
    addClass.classList.add("active");
  });
}

function closeForm() {
  let cancelButton = document.querySelector(".cancel");

  cancelButton.addEventListener("click", (event) => {
    let addClass = document.querySelector(".FormContainer");
    addClass.classList.remove("active");
  });
}

function listen() {
  // Checkbox if checked that will be crossed then mark them as completed
  mark();

  // Todo delete the todo of the project
  removeTodo();

  // changing toto after going to another project and setting their todo
  changeTodo();

  // if button is clicked form will show up to fill form requirement and add them
  openForm();

  // if cancel button is clicked the form will be closed without being adding any todo to project
  closeForm();

  // function to add todo tasks in the project
  addTodoForm();

  // Open the form to update todo
  updateFormOpen();

  // Close the update form 
  updateFormClose();

  // update the form 
  updateTodo();
}

function addNewProject() {
  // if project buttons is clicked add new project to projects array
  let projectButtons = document.querySelector(".ProjectButton");

  let projects = readItem();

  // Add event listener to the button
  projectButtons.addEventListener("click", (event) => {
  event.preventDefault();

  // Get the project name from the input field
  let projectName = document.querySelector(".ProjectInput").value;

  if (projectName === "") {
    return console.log("pls enter the Project Name");
  }

  // Check if the project name already exists
  let projectExists = projects.some(project => project.name === projectName);
  if (projectExists) {
      document.querySelector(".ProjectInput").value = "";
      console.log("This project already exists");
      return;
  }

  // Add the project to the projects array
  addProject(projectName);

  // Remove Projects class to remove all listed project
  let projectsClass = document.querySelector(".projects");
  projectsClass.remove();

  // Re-show all projects
  showProject();

  // showing todo of newly formed project
  showTodo(projectName);

  // Clear the input field
  document.querySelector(".ProjectInput").value = "";

  // adding event listeners to each project 
  changeTodo();
});
}

function addTodoForm() {
  let submitButton = document.querySelector(".add");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let date = document.querySelector("#DueDate").value;
    let description = document.querySelector("#description").value;
    let priority = document.querySelector("#priority").value;

    if (title === "") {
      let addClass = document.querySelector(".FormContainer");
      addClass.classList.remove("active");
      return console.log("pls enter the title");
    }

    let todo = new Todo(title, description, date, priority);

    let projectNameElement = document.querySelector(".projectShow");
    if (projectNameElement) {
      let projectName = projectNameElement.textContent;
      console.log("Project Name:", projectName); // Debugging output
      addTodo(projectName, todo);
      showTodo(projectName);

      let addClass = document.querySelector(".FormContainer");
      addClass.classList.remove("active");
    } else {
      console.error("No project selected.");
    }

    // Clear the input field
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";

    mark();
    removeTodo();
    priorityColor();
    updateFormOpen()
  });
}

function updateFormOpen() {
  let todoDivs = document.querySelectorAll(".todoDiv");

  todoDivs.forEach((todoDiv) => {
    todoDiv.addEventListener("click", (event) => {
      // Opening the update form by adding the "open" class
      let addClass = document.querySelector(".updateFormContainer");
      addClass.classList.add("open");

      
      let updateForm = document.querySelector(".updateFormContainer");
      let titleInput = updateForm.querySelector("#updateTitle");
      let descriptionInput = updateForm.querySelector("#updateDescription");
      let dueDateInput = updateForm.querySelector("#updateDueDate");
      let prioritySelect = updateForm.querySelector("#updatePriority");

      // Extract values from the clicked todo item
      let title = todoDiv.querySelector(".updateTitle").textContent;
      let description = todoDiv.querySelector(".updateDescription").textContent;
      let dueDate = todoDiv.querySelector(".updateDueDate").textContent;
      let priority = todoDiv.querySelector(".updatePriority").innerText;

      function priorityOutput() {
        // Example priority string
        let priorityString = "Priority: Low hii";

        // Split the string at the first whitespace
        let priorityParts = priorityString.split(/\s(.+)/);

        // Take the second part after splitting
        let priority = priorityParts[1];

        // Split the second part by whitespace
        let priorityWords = priority.split(/\s+/);

        // Take the first word after splitting
        let actualPriority = priorityWords[0];

        return actualPriority;
      }
      // Remove "Priority: " from the priority string
      priority = priorityOutput();

      // Populate the corresponding fields in the update form
      titleInput.value = title;
      descriptionInput.value = description;
      dueDateInput.value = dueDate;
      prioritySelect.value = priority;
      // console.log(title, description, dueDate, priority)
    });
  });
}

function updateFormClose() {
  let updateButton = document.querySelector(".updateCancel");

  updateButton.addEventListener("click", (event) => {
    let addClass = document.querySelector(".updateFormContainer");
    addClass.classList.remove("open");
  });
}

function updateTodo() {
  // Select the update form
  let updateForm = document.querySelector(".updateForm");

  // Add event listener for form submission
  updateForm.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the updated values from the form fields
    let updatedTitle = document.getElementById("updateTitle").value;
    let updatedDescription = document.getElementById("updateDescription").value;
    let updatedDueDate = document.getElementById("updateDueDate").value;
    let updatedPriority = document.getElementById("updatePriority").value;

    // Retrieve the todos from local storage
    let todos = readItem();
    console.log(todos);

    // Loop through the todos to find the matching todo
    todos.forEach(todo => {
      if (todo.title === updatedTitle && todo.description === updatedDescription && todo.dueDate === updatedDueDate) {
        // Update the found todo with the new values
        todo.title = updatedTitle;
        todo.description = updatedDescription;
        todo.dueDate = updatedDueDate;
        todo.priority = updatedPriority;
      }
    });

    // Save the updated todos back to local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // Optionally, close the update form
    let updateFormContainer = document.querySelector(".updateFormContainer");
    updateFormContainer.classList.remove("open");

    // Optionally, trigger other functions to update the UI
    mark();
    removeTodo();
    priorityColor();
  });
}



export { listen, addNewProject, updateFormOpen  };

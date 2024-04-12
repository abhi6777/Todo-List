
// this is before adding local storage 
function showTodo(projectName) {
  // Find the project instance based on the project name
  let project = projectsList.find((project) => project.name === projectName);

  // Add 'projectShow' class to the project matching the projectName
  function mark() {
    let projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      if (project.textContent === projectName) {
        project.classList.add("projectShow");
      } else {
        project.classList.remove("projectShow");
      }
    });
  }

  mark();

  // If the project is found, display its todo items
  if (project) {
    // Remove previous projects todo
    let todo = document.querySelectorAll(".todoDiv");
    todo.forEach((todo) => {
      todo.remove();
    });

    project.todo.forEach((todoItem) => {
      // Dividing into different part for better looks
      let todoContainer = document.createElement("div");
      todoContainer.classList.add("todoDiv");
      right.appendChild(todoContainer);

      let firstLine = document.createElement("div");
      firstLine.classList.add("firstLine");
      todoContainer.appendChild(firstLine);

      let secondLine = document.createElement("div");
      secondLine.classList.add("secondLine");
      todoContainer.appendChild(secondLine);

      // Main part
      // Line First
      let todoTitle = document.createElement("p");
      todoTitle.textContent = todoItem.title;
      firstLine.appendChild(todoTitle);

      let todoDueDate = document.createElement("p");
      todoDueDate.textContent = todoItem.dueDate;
      firstLine.appendChild(todoDueDate);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("Done");
      todoDueDate.appendChild(checkbox);

      // Line second
      let todoDescription = document.createElement("p");
      todoDescription.textContent = todoItem.description;
      secondLine.appendChild(todoDescription);

      let todoPriority = document.createElement("p");
      todoPriority.textContent = "Priority: " + todoItem.priority;
      secondLine.appendChild(todoPriority);

      const span = document.createElement("span");
      span.innerHTML = "&#128465;";
      span.classList.add("remove");
      todoPriority.appendChild(span);
    });
  }
}
import { updateFormOpen } from './eventListeners.js';



function updateForm() {
     updateFormOpen(); 
     let body = document.querySelector("body");

     // Create div element with classes
     var formContainer = document.createElement("div");
     formContainer.classList.add("updateFormContainer", "popup");

     // Create h2 element
     var heading = document.createElement("h2");
     heading.textContent = "Update Todo";

     // Create div element with class
     var topForm = document.createElement("div");
     topForm.classList.add("topForm");

     // Create and append label and input elements for Title
     var titleLabel = document.createElement("label");
     titleLabel.setAttribute("for", "updateTitle");
     titleLabel.textContent = "Title";
     var titleInput = document.createElement("input");
     titleInput.setAttribute("type", "text");
     titleInput.setAttribute("name", "title");
     titleInput.setAttribute("id", "updateTitle");
     titleInput.setAttribute("placeholder", "Title of Task");
     topForm.appendChild(titleLabel);
     topForm.appendChild(titleInput);

     // Create and append label and input elements for DueDate
     var dateLabel = document.createElement("label");
     dateLabel.setAttribute("for", "updateDueDate");
     dateLabel.textContent = "Date";
     var dateInput = document.createElement("input");
     dateInput.setAttribute("type", "date");
     dateInput.setAttribute("name", "DueDate");
     dateInput.setAttribute("id", "updateDueDate");
     dateInput.setAttribute("placeholder", "Date");

     // Set default value to today's date
     var today = new Date().toISOString().split('T')[0];
     dateInput.setAttribute("value", today);

     topForm.appendChild(dateLabel);
     topForm.appendChild(dateInput);


     // Create and append label and input elements for Description
     var descriptionLabel = document.createElement("label");
     descriptionLabel.setAttribute("for", "updateDescription");
     descriptionLabel.textContent = "Description";
     var descriptionInput = document.createElement("input");
     descriptionInput.setAttribute("type", "text");
     descriptionInput.setAttribute("name", "description");
     descriptionInput.setAttribute("id", "updateDescription");
     descriptionInput.setAttribute("placeholder", "Description");
     topForm.appendChild(descriptionLabel);
     topForm.appendChild(descriptionInput);

     // Create and append label and select elements for Priority
     var priorityLabel = document.createElement("label");
     priorityLabel.setAttribute("for", "updatePriority");
     priorityLabel.textContent = "Priority";
     var prioritySelect = document.createElement("select");
     prioritySelect.setAttribute("name", "priority");
     prioritySelect.setAttribute("id", "updatePriority");
     var lowOption = document.createElement("option");
     lowOption.setAttribute("value", "low");
     lowOption.textContent = "Low";
     var mediumOption = document.createElement("option");
     mediumOption.setAttribute("value", "medium");
     // mediumOption.setAttribute("selected", "selected");
     mediumOption.textContent = "Medium";
     var highOption = document.createElement("option");
     highOption.setAttribute("value", "high");
     highOption.textContent = "High";
     prioritySelect.appendChild(lowOption);
     prioritySelect.appendChild(mediumOption);
     prioritySelect.appendChild(highOption);
     topForm.appendChild(priorityLabel);
     topForm.appendChild(prioritySelect);

     // Create div element with class
     var buttonContainer = document.createElement("div");
     buttonContainer.classList.add("button");

     // Create and append buttons
     var addButton = document.createElement("button");
     addButton.setAttribute("type", "submit");
     addButton.classList.add("rewrite");
     addButton.textContent = "Update Todo";
     var cancelButton = document.createElement("button");
     cancelButton.classList.add("updateCancel");
     cancelButton.textContent = "Cancel";
     buttonContainer.appendChild(addButton);
     buttonContainer.appendChild(cancelButton);

     // Append all elements to formContainer
     formContainer.appendChild(heading);
     formContainer.appendChild(topForm);
     formContainer.appendChild(buttonContainer);

     // Append formContainer to document body or any other container element
     document.body.appendChild(formContainer);
}

export { updateForm }
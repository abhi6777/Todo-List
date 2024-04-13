function removeTodo() {
  // Delete button if clicked the todo will be deleted
  let removeButton = document.querySelectorAll(".remove");
  removeButton.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
      let todoDiv = removeButton.closest(".todoDiv");
      todoDiv.remove();
    });
  });
}
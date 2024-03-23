class todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function Project(name) {
  this.name = name;
  this.todo = [];
}

export { todo, Project };

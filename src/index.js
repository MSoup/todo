import {
  handleAddCategory,
  handleHelp,
  handleComplete,
  handleAddTodo,
  handleRemove,
} from "./buttons.js";

// add event listeners
const addTodo = document.querySelector(".add-todo");
const addCategory = document.querySelector(".add-category");
const rightWindow = document.querySelector(".right-window");

addTodo.addEventListener("click", handleAddTodo);
addCategory.addEventListener("click", handleAddCategory);
rightWindow.addEventListener("click", handleComplete);
rightWindow.addEventListener("click", handleRemove);

class Todo {
  constructor(title, dueDate = "unknown", priority = 0, description = "") {
    // main display
    this.title = title;
    // max char limitation?
    this.description = description;
    // dateTime object?
    this.dueDate = dueDate;
    // low: 0, medium: 1, high: 2
    this.priority = priority;
  }
}

function Test() {
  let tests = [
    "clean my room",
    "clean your room",
    "clean my kitchen",
    "clean my bathroom",
    "clean my sink",
  ];

  const rightWindow = document.querySelector(".right-window");

  tests.forEach((test) => {
    let newTodo = new Todo(test);
    // pass todo object into factory function to make them
    rightWindow.appendChild(makeTodo(newTodo));
  });

  const categoryWindow = document.querySelector(".categories-container");
  categoryWindow.appendChild(makeCategory("Test 6"));
}

// accepts todo object and returns DOM todo element
function makeTodo(todo) {
  const container = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const due = document.createElement("div");
  const remove = document.createElement("button");
  const priority = document.createElement("div");
  const complete = document.createElement("button");

  title.className = "todo-title";
  container.className = "todo-object";
  description.className = "todo-description";
  due.className = "due";
  remove.className = "remove";
  priority.className = "priority";
  complete.className = "complete";

  title.textContent = todo.title;
  description.textContent = todo.description;
  due.textContent = todo.due;
  remove.textContent = "X";
  complete.textContent = "Complete";

  container.appendChild(complete);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(due);
  container.appendChild(remove);

  return container;
}

// accepts category object
function makeCategory(title) {
  const container = document.createElement("button");
  container.className = "tag";
  container.textContent = title;
  return container;
}
Test();

// item: html DOM object
function appendToDOM(item) {
  // item either goes into categories or into the right window
  const rightWindow = document.querySelector(".right-window");
  const categoryWindow = document.querySelector(".categories-container");
  // if its a todo object move it into the right window
  if (item.className === "todo-object") {
    rightWindow.appendChild(item);
  } else if (item.className === "tag") {
    categoryWindow.appendChild(item);
  } else {
    console.log("This shouldn't run");
  }
}

export { makeTodo, makeCategory, appendToDOM, Todo };

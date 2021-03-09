import { makeTodo, makeCategory, appendToDOM, Todo } from "./index.js";

function handleAddTodo() {
  const todoTitle = document.querySelector(".input-todo");
  const todoObject = makeTodo(new Todo(todoTitle.value));

  appendToDOM(todoObject);
}
function handleAddCategory() {
  const category = document.querySelector("#addCategory");
  const categoryText = makeCategory(category.value);
  // append to dom
  appendToDOM(categoryText);
  category.value = "";
}

function handleComplete(event) {
  if (event.target.className === "complete") {
    let todoCard = event.target.parentElement;
    todoCard.classList.toggle("completed-todo");
  }
}
function handleRemove(event) {
  if (event.target.className === "remove") {
    event.target.parentElement.remove(event.target);
  }
}

function handleHelp() {
  return;
}

export {
  handleAddCategory,
  handleHelp,
  handleRemove,
  handleComplete,
  handleAddTodo,
};

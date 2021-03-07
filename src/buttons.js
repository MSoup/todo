import { makeTodo, makeCategory, appendToDOM, Todo } from "./index.js";

function handleAddTodo() {
  const todoTitle = document.querySelector(".input-todo");
  const todoObject = makeTodo(new Todo(todoTitle.value));

  appendToDOM(todoObject);
}
function handleAddCategory() {
  const category = document.querySelector(".input-category");
  makeCategory(category.textContent);
}

function handleComplete() {
  return;
}
function handleHelp() {
  return;
}

export { handleAddCategory, handleHelp, handleComplete, handleAddTodo };

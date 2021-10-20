const todos = document.querySelectorAll(".todos");
const allStatus = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  console.log("dragStart");
}
function dragEnd() {
  draggableTodo = null;
  console.log("dragEnd");
}
allStatus.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("drop", dragdrop);
});

function dragOver(e) {
  e.preventDefault();
  console.log("dragdOver");
}
function dragLeave() {
  this.style.border = "none";
  console.log("dragleave");
}
function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragenter");
}
function dragdrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dragdrop");
}
// model
const btn = document.querySelectorAll("[data-target]");
const close_btn = document.querySelectorAll(".close-modal");
const overlay = document.querySelector("#overlay");
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});
close_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("active");
    overlay.classList.remove("active");
  });
});
window.onclick = (e) => {
  if (e.target == overlay) {
    const model = document.querySelectorAll(".model");
    model.forEach((model) => model.classList.remove("active"));
    overlay.classList.remove("active");
  }
};
// add todo
const todo_submit = document.getElementById("todo_submit");
todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const divTodo = document.createElement("div");
  const inputValue = document.getElementById("todo_input").value;
  const text = document.createTextNode(inputValue);
  divTodo.appendChild(text);
  divTodo.classList.add("todos");
  divTodo.setAttribute("draggable", "true");
  //   creat span for divTodo
  const span = document.createElement("span");
  const spansimple = document.createTextNode("\u00D7");
  span.classList.add("close");

  span.appendChild(spansimple);
  divTodo.appendChild(span);
  AddValue.appendChild(divTodo);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  divTodo.addEventListener("dragstart", dragStart);
  divTodo.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

const btnclose = document.querySelectorAll(".close");

btnclose.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

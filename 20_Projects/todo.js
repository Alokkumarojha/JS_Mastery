const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addBtn = document.querySelector("#add-btn");
const todoDate = document.getElementById("todo-date");
const errorMsg = document.querySelector("#errorMsg");

addTask = function () {
  const tasktext = todoInput.value.trim();
  const taskDate = todoDate.value;
  errorMsg.innerHTML = ""; // clear error msg before adding value in todoInput

  if (tasktext !== "" && taskDate !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${tasktext} - due ${taskDate} <button class="deletList">Delete</button>`;
    todoList.appendChild(li);
    const deleteTodoList = li.querySelector(".deletList");
    deleteTodoList.addEventListener("click", function () {
      li.remove();
    });

    todoInput.value = "";
    todoDate.value = "";
  } else {
    errorMsg.innerHTML = " Please fill the message and date..";
  }
};

addBtn.addEventListener("click", addTask);
addBtn.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

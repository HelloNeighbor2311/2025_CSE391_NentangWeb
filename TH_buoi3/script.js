document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBtn").addEventListener("click", addTask);
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") return;
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", function () {
    this.classList.toggle("complete");
  });
  let button = document.createElement("button");
  button.textContent = "Xoá";
  button.classList.add("delete-btn");
  button.addEventListener("click", function () {
    li.remove();
  });

  let editInput = document.createElement("input");
  editInput.textContent = "Nhập công việc...";
  editInput.value = taskText;
  editInput.style.display = "none";

  let editButton = document.createElement("button");
  editButton.textContent = "Chỉnh sửa";
  editButton.classList.add("edit-btn");
  editButton.addEventListener("click", function () {
    if (span.style.display !== "none") {
      span.style.display = "none";
      editInput.style.display = "inline";
      editButton.textContent = "Lưu";
    } else {
      span.textContent = editInput.value.trim();
      span.style.display = "inline";
      editInput.style.display = "none";
      editButton.textContent = "Chỉnh sửa";
    }
  });

  li.appendChild(span);
  li.appendChild(editInput);
  li.appendChild(editButton);
  li.appendChild(button);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

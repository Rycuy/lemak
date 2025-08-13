const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

loadTasks();

// Event tambah tugas
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = createTaskElement(taskText);
  taskList.appendChild(li);

  saveTasks();
  taskInput.value = "";
}

// Buat elemen tugas
function createTaskElement(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(delBtn);

  return li;
}

// Simpan tugas ke localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Muat tugas dari localStorage
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    JSON.parse(saved).forEach((t) => {
      const li = createTaskElement(t.text);
      if (t.completed) li.classList.add("completed");
      taskList.appendChild(li);
    });
  }
}

// Ambil elemen
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Fungsi tambah task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tuliskan sesuatu dulu!");
        return;
    }

    // Buat elemen <li>
    const li = document.createElement("li");

    // Span untuk teks
    const span = document.createElement("span");
    span.textContent = taskText;

    // Tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Gabungkan ke <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Masukkan ke list
    taskList.appendChild(li);

    // Kosongkan input
    taskInput.value = "";
}

// Klik tombol tambah
addBtn.addEventListener("click", addTask);

// Tekan Enter
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

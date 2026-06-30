function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskTime = document.getElementById("taskTime");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    task.innerHTML = `
        <div class="task-info">
            <div class="task-text">${taskInput.value}</div>

            <div class="task-date">
                📅 ${taskDate.value || "No Date"}
                &nbsp; | &nbsp;
                ⏰ ${taskTime.value || "No Time"}
            </div>
        </div>

        <div class="actions">
            <button class="complete" onclick="toggleTask(this)">
                ✓
            </button>

            <button class="edit" onclick="editTask(this)">
                Edit
            </button>

            <button class="delete" onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    document.getElementById("taskList").appendChild(task);

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
}

function toggleTask(button) {
    button.closest(".task").classList.toggle("completed");
}

function deleteTask(button) {
    button.closest(".task").remove();
}

function editTask(button) {

    const taskText =
        button.closest(".task")
        .querySelector(".task-text");

    const newTask =
        prompt("Edit Task", taskText.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        taskText.innerText = newTask;
    }
}
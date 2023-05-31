function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;

  if (task !== "") {
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerHTML = task + '<span class="delete" onclick="deleteTask(this)">x</span>';
    taskList.appendChild(newTask);
    input.value = "";
  }
}

function deleteTask(task) {
  task.parentNode.remove();
}
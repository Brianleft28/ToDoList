const taskInput = document.getElementById("taskInput");
const btnAddTask = document.getElementById("btnAddTask");
const taskList = document.getElementById("taskList");

function AñadirTarea() {
  const tareaNueva = taskInput.value;
  if (tareaNueva.trim() !== '') {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaNueva;

    taskList.appendChild(nuevaTarea);

    taskInput.value = "";
  } else {
    alert("Por favor, ingrese una tarea válida.");
  }
}

btnAddTask.addEventListener("click", (e) => {
  e.preventDefault;
  AñadirTarea();
  taskList.style.display = 'block';
});

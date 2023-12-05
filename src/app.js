const taskInput = document.getElementById("taskInput");
const btnAddTask = document.getElementById("btnAddTask");
const taskList = document.getElementById("taskList");

function añadirTarea() {
  const tareaNueva = taskInput.value;
  if (tareaNueva.trim() !== '') {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaNueva;



    // BTN EDITAR TAREA
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.className = 'btn-primary btn_li ms-2'
    btnEditar.onclick = function () {
        editarTarea(nuevaTarea);
    };
    // BTN ELIMINAR TAREA
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'X'
    btnEliminar.className = 'btn-danger btn_li'
    btnEliminar.onclick = function() {
        eliminarTarea(nuevaTarea);
    };

    nuevaTarea.appendChild(btnEditar);
    nuevaTarea.appendChild(btnEliminar);
    taskList.appendChild(nuevaTarea);
    taskInput.value = "";
    taskList.style.display = 'block';
  } else {
    alert("Por favor, ingrese una tarea válida.");
    taskList.style.display = 'none';
  }
}


// funciones editar tarea - eliminar tarea 

function editarTarea() {
    // prox
}
function eliminarTarea(){
    // prox
}


// eventos Boton AddTask

btnAddTask.addEventListener("click", (e) => {
    e.preventDefault();
    añadirTarea();

});



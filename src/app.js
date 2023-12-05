const taskInput = document.getElementById("taskInput");
const btnAddTask = document.getElementById("btnAddTask");
const taskList = document.getElementById("taskList");

function añadirTarea() {
  const tareaNueva = taskInput.value;
  if (tareaNueva.trim() !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaNueva;

    // BTN EDITAR TAREA
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-primary btn_li ms-2";
    btnEditar.onclick = function () {
      editarTarea(nuevaTarea);
    };
    // BTN ELIMINAR TAREA
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.className = "btn-danger btn_li";
    btnEliminar.onclick = function () {
      eliminarTarea(nuevaTarea);
    };

    nuevaTarea.appendChild(btnEditar);
    nuevaTarea.appendChild(btnEliminar);
    taskList.appendChild(nuevaTarea);
    taskInput.value = "";
    taskList.style.display = "block";
  } else {
    alert("Por favor, ingrese una tarea válida.");
    taskList.style.display = "none";
  }
}

// funciones editar tarea - eliminar tarea

function editarTarea(tarea) {
  // Crear un input para editar
  const inputEditar = document.createElement("input");
  inputEditar.type = "text";
  tarea.textContent = "";
  inputEditar.value = tarea.textContent;

  // Crear un botón "Guardar Cambios"
  const btnGuardarCambios = document.createElement("button");
  btnGuardarCambios.textContent = "Guardar Cambios";
  btnGuardarCambios.onclick = function () {
    guardarCambios(tarea, inputEditar);
  };

  // Reemplazar el contenido de la tarea con el input y el botón
  tarea.textContent = "";
  tarea.appendChild(inputEditar);
  tarea.appendChild(btnGuardarCambios);

  // Enfocar el input para facilitar la edición
  inputEditar.focus();
}
function guardarCambios(tarea, inputEditar) {
  const nuevoTexto = inputEditar.value;
  tarea.textContent = nuevoTexto;

  // Limpiar el contenido y volver a agregar los botones
  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.className = "btn-primary btn_li ms-1";
  btnEditar.onclick = function () {
    editarTarea(tarea);
  };

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";
  btnEliminar.className = "btn-danger btn_li ms-1";
  btnEliminar.onclick = function () {
    eliminarTarea(tarea);
  };

  tarea.appendChild(btnEditar);
  tarea.appendChild(btnEliminar);
  
  // Guardar tareas actualizadas en localStorage
  guardarTareas();
}

function eliminarTarea(tarea) {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      tarea.remove();
      // Guardar tareas actualizadas en localStorage
      guardarTareas();
    }
  }
// eventos Boton AddTask

btnAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  añadirTarea();
});

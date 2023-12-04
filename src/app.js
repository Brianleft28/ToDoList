document.addEventListener('DOMContentLoaded', function() {
    const btnADD = document.getElementById('btnAddItem');

// funcion para ocultar ingresar tarea 

function ocultarIngreseTarea(){
    const ingreseTarea = document.getElementById('divTareas')
    ingreseTarea.style.display = 'none';
}

// funcion para agregar un elemento. 

function agregarElemento() {
    // Obtener el valor del input
    const inputValue = document.getElementById('inputTask').value;

    // Verificar que el input no esté vacío
    if (inputValue.trim() !== '') {
        // Crear un nuevo elemento de lista (li)
        const nuevoElemento = document.createElement('li');
        
        // Asignar el texto del input al elemento de lista
        nuevoElemento.textContent = inputValue;

        // Obtener el contenedor de la lista (ul)
        const listaContainer = document.getElementById('listaContainer');

        // Crear un nuevo elemento de lista desordenada (ul) si no existe
        if (!listaContainer.querySelector('ul')) {
            const nuevaLista = document.createElement('ul');
            listaContainer.appendChild(nuevaLista);
        }

        // Agregar el nuevo elemento de lista al elemento de lista desordenada
        listaContainer.querySelector('ul').appendChild(nuevoElemento);

        // Limpiar el contenido del input después de agregar a la lista
        document.getElementById('inputText').value = '';
    } else {
        alert('Ingrese información válida antes de agregar a la lista.');
    }
}

    btnADD.addEventListener('click', (e) => {
        ocultarIngreseTarea()

    })
})


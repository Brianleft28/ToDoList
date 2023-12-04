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
        const nuevoElemento = document.createElement('p');
        // Asignar el texto del input al elemento de lista
        nuevoElemento.textContent = inputValue;
        // Aplicar estilo al elemento li recién creado
        nuevoElemento.style.padding = '8px'; // Añade un relleno al elemento li
        nuevoElemento.style.borderBottom = '1px solid #ccc'; // Añade un borde inferior

        // Obtener el contenedor de la lista (ul)
        const listaContainer = document.getElementById('listaContainer');

        // Crear un nuevo contenedor (div) si no existe
        if (!listaContainer.querySelector('div')) {
            const nuevaLista = document.createElement('div');
            nuevaLista.style.padding = '5px';      
            nuevaLista.style.backgroundColor = '#000';
            nuevaLista.style.width = '100%';
            nuevaLista.style.display = 'block';
            nuevaLista.style.color = '#fff';
            listaContainer.appendChild(nuevaLista);
        }
        // Agregar el nuevo elemento de lista al elemento de lista desordenada
        listaContainer.querySelector('div').appendChild(nuevoElemento);

        // Limpiar el contenido del input después de agregar a la lista
        document.getElementById('inputTask').value = '';
    } else {
        alert('Ingrese información válida antes de agregar a la lista.');
    }
}

    btnADD.addEventListener('click', (e) => {
        ocultarIngreseTarea()
        agregarElemento()

    })
})


const divSinTareas = document.getElementById('divTareasAdd')
divSinTareas.style.display = 'none';


document.addEventListener('DOMContentLoaded', function () {
    // BTN AGREGAR TAREA //
    const btnAddItem = document.getElementById('btnAddItem');
    btnAddItem.addEventListener('click', function() {
      var divTareas = document.getElementById('DivTareas');
      divTareas.style.display = 'none';
    });

  });
document.addEventListener('DOMContentLoaded', function() {
    const btnADD = document.getElementById('btnAddItem');


function ocultarIngreseTarea(){
    const ingreseTarea = document.getElementById('divTareas')
    ingreseTarea.style.display = 'none';
}



    btnADD.addEventListener('click', (e) => {
        ocultarIngreseTarea()

    })
})


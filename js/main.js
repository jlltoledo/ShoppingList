let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function(e){
    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let cantidad = document.getElementById("cantidad");
    //nombre
    if (nombre.value.length >= 3){
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");

    }else{
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }
    //cantidad
    if (cantidad.value.length >= 1){
        cantidad.classList.remove("is-invalid");
        cantidad.classList.add("is-valid");

    }else{
        cantidad.classList.remove("is-valid");
        cantidad.classList.add("is-invalid");
    }




})

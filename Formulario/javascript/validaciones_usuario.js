function validarCamposObligatorios() {
    var bandera = true
    for(var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if((elemento.value == ''&& elemento.type == 'text')||elemento.type == 'password') {
            if(elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br>Cedula vacia...'
            }
            if(elemento.id == 'nombres') {
                document.getElementById('mensajeNombres').innerHTML = '<br>Nombres vacios...'
            }
            if(elemento.id == 'apellidos') {
                document.getElementById('mensajeApellidos').innerHTML = '<br>Apellidos vacios...'
            }
            if(elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br>Direccion vacia...'
            }
            if(elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br>Telefono vacio...'
            }
            if(elemento.id == 'fecha') {
                document.getElementById('mensajeFecha').innerHTML = '<br>Fecha vacia...'
            }
            if(elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br>Correo Electronico vacio...'
            }
            if(elemento.id == 'contrasena') {
                document.getElementById('mensajeContrasena').innerHTML = '<br>Contraseña vacia...'
            }
            elemento.style.border = '1px red solid'
            elemento.className = 'error'
            bandera = false
        }
    }
    if(!bandera) {
        alert('Error: revisar los comentarios')
    }
    return bandera
}
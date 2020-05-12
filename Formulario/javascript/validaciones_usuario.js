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
function validarCampoCedula(elemento) {
    var bandera = true
    if(elemento.value != '') {
        var cad = document.getElementById('cedula').value.trim();
        var total = 0;
        var longitud = cad.length;
        var longcheck = longitud - 1;
        if(cad !== '' && longitud === 10) {
            for(i = 0; i< longcheck; i++) {
                if(i%2 === 0) {
                    var aux = cad.charAt(i) * 2;
                    if(aux > 9) aux -= 9;
                        total += aux;
                } else {
                   total += parseInt(cad.charAt(i));
                }
            }
            total = total % 10 ? 10 - total % 10 :0;
            if(cad.charAt(longitud-1) == total) {
            document.getElementById('mensajeCedula').innerHTML = '';
            elemento.style.border = '1px black solid'
            bandera = true;
            } 
        } else {
            document.getElementById('mensajeCedula').innerHTML = '<br>Cedula Invalida...'
            elemento.style.border = '1px red solid'
            elemento.className = 'error'
            bandera = false
        }
    } else {
        document.getElementById('mensajeCedula').innerHTML = '<br>El Campo Cedula esta vacio...'
        elemento.style.border = '1px red solid'
        elemento.className = 'error'
        bandera = false
    }
    return bandera
}
function validarNombres(elemento) {
    if(elemento.value != '') {
        if((elemento.value.charCodeAt(elemento.value.length-1) >= 97 && elemento.value.charCodeAt(elemento.value.length-1) <= 122) || (elemento.value.charCodeAt(elemento.value.length-1) == 32) || (elemento.value.charCodeAt(elemento.value.length-1) >= 65 && elemento.value.charCodeAt(elemento.value.length-1) <= 90)) {
            
            var espacio = console.log(elemento.value.trim().indexOf(String.fromCharCode(32)))

            if(elemento.value.trim().indexOf(String.fromCharCode(32)) == -1) {
                document.getElementById('mensajeNombres').innerHTML = '<br>Nombres Incompletos...'
                elemento.style.border = '1px red solid'
                elemento.className = 'error'
                return false;
            } else {
                
                document.getElementById('mensajeNombres').innerHTML = '';
                elemento.style.border = '1px black solid'
                return true;
            }
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
        }
    } else {
        document.getElementById('mensajeNombres').innerHTML = '<br>El campo esta vacio'
        elemento.style.border = '1px red solid'
        elemento.className = 'error'
        bandera = false;
    }
}
function validarApellidos(elemento) {
    if(elemento.value != '') {
        if((elemento.value.charCodeAt(elemento.value.length-1) >= 97 && elemento.value.charCodeAt(elemento.value.length-1) <= 122) || (elemento.value.charCodeAt(elemento.value.length-1) == 32)  || (elemento.value.charCodeAt(elemento.value.length-1) >= 65 && elemento.value.charCodeAt(elemento.value.length-1) <= 90)) {
            
            var espacio = console.log(elemento.value.trim().indexOf(String.fromCharCode(32)))

            if(elemento.value.trim().indexOf(String.fromCharCode(32)) == -1) {
                document.getElementById('mensajeApellidos').innerHTML = '<br>Apellidos Incompletos...'
                elemento.style.border = '1px red solid'
                elemento.className = 'error'
                return false;
            } else {
                document.getElementById('mensajeApellidos').innerHTML = '';
                elemento.style.border = '1px black solid'
                return true;
            }
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            document.getElementById('mensajeApellidos').innerHTML = '<br>Apellidos Incompletos...'
            elemento.style.border = '1px red solid'
            elemento.className = 'error'
            return false;
        }
    } else {
        document.getElementById('mensajeApellidos').innerHTML = '<br>El campo esta vacio'
        elemento.style.border = '1px red solid'
        elemento.className = 'error'
        bandera = false;
    }
}
function validarTelefono(elemento) {
    if(elemento.value != '') {
        if((elemento.value.charCodeAt(elemento.value.length-1) >= 48 && elemento.value.charCodeAt(elemento.value.length-1) <= 57) && (elemento.value.length <= 10)) {
            document.getElementById('mensajeTelefono').innerHTML = '';
            elemento.style.border = '1px black solid'
            return true;
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false;
        }
    } else {
        
    }
}
function validarFecha(elemento) {
    if(elemento.value != '') {
        var dia = elemento.value[0]+elemento.value[1];
        var mes = elemento.value[3]+elemento.value[4];
        var ano = elemento.value[6]+elemento.value[7]+elemento.value[8]+elemento.value[9];

        console.log(ano)

        if( ((dia >= 1)&&(dia <= 31)) && (elemento.value[2] == '/') && ((mes >= 1) && (mes <= 12)) && (elemento.value[5] == '/') && ((ano >= 0) && (ano <= 2020)) && (elemento.value.length <= 10)) {
            document.getElementById('mensajeFecha').innerHTML = '';
            elemento.style.border = '1px black solid'
            return true;
        } else {
            document.getElementById('mensajeFecha').innerHTML = '<br>Inserte la fecha con el formato indicado...'
            elemento.style.border = '1px red solid'
            elemento.className = 'error'
            bandera = false;
            return false;
        }
    } else {
        return false;
    }
}
function generar() {

    var indice = 0;

    imagenesHabilitadas = new Array();
    imagenesTotal = new Array();

    //TODAS LAS IMAGENES DENTRO DEL VECTOR imagenesTotal. 
    imagenesTotal[0] = '/Galeria/Imagenes/bandera.jpg';
    imagenesTotal[1] = '/Galeria/Imagenes/bitri.png';
    imagenesTotal[2] = '/Galeria/Imagenes/ElMasGrande.jpg';
    imagenesTotal[3] = '/Galeria/Imagenes/elnacional13estrellas.jpg';
    imagenesTotal[4] = '/Galeria/Imagenes/ElNacional2019.jpg';
    imagenesTotal[5] = '/Galeria/Imagenes/ElNacionalCD.jpg';
    imagenesTotal[6] = '/Galeria/Imagenes/indumentaria.jpg';
    imagenesTotal[7] = '/Galeria/Imagenes/MareaRoja.jpg';
    imagenesTotal[8] = '/Galeria/Imagenes/NachoTuPapa.jpg';
    imagenesTotal[9] = '/Galeria/Imagenes/NachoTuPapaHinchada.jpg';

    //GENERACION DE NUMEROS ALEATORIOS. 
    indice = Math.random() * (imagenesTotal.length);
    indice = Math.floor(indice);
    
    for (i=0;i<=4;i++) {
        if (indice == imagenesTotal.length) indice = 0;
        imagenesHabilitadas[i] = imagenesTotal[indice];
        indice++;
    }

    /*document.getElementById('imagen0').src = imagenesHabilitadas[0];
    document.getElementById('imagen1').src = imagenesHabilitadas[1];
    document.getElementById('imagen2').src = imagenesHabilitadas[2];
    document.getElementById('imagen3').src = imagenesHabilitadas[3];
    document.getElementById('imagen4').src = imagenesHabilitadas[4];*/

}

/*function carrousel(direccion){

    contador = 0;

    let direccion1 = direccion;

    if(direccion1=='atras'){
        if(contador==0){
            document.getElementById('imagen').src= imagenesHabilitadas[imagenesHabilitadas.length-1];
            contador++;
        }else if (contador<imagenesHabilitadas.length-1) {
            document.getElementById('imagen').src= imagenesHabilitadas[imagenesHabilitadas.length-1-contador];
            contador++;
        }else {
            document.getElementById('imagen').src= imagenesHabilitadas[0];
            //boton.botonAtras.disabled=true;
            contador= imagenesHabilitadas.length -1;
        }
    }

    if(direccion1=='adelante'){
        if(contador==0){
            document.getElementById('imagen').src= imagenesHabilitadas[0];
            contador++;
        }else if (contador<imagenesHabilitadas.length-1) {
            document.getElementById('imagen').src= imagenesHabilitadas[contador];
            contador++;
        }else {
            document.getElementById('imagen').src= imagenesHabilitadas[imagenesHabilitadas.length-1];
            contador=0;
        }
    }

}*/


var contador=0;

function moverDerecha(boton){
    
    if(contador == 0) {
        document.getElementById('imagen').src = imagenesHabilitadas[0];
        contador++;
        var elemento = document.getElementById("texto");
        elemento.innerHTML += contador+" desde if contador == 0------------------";
    } else if(contador == 1) {
        document.getElementById('imagen').src = imagenesHabilitadas[1];
        contador++;
        var elemento = document.getElementById("texto");
        elemento.innerHTML += contador+" desde if contador == 1------------------";
    } else if(contador == 2) {
        document.getElementById('imagen').src = imagenesHabilitadas[2];
        contador++;
        var elemento = document.getElementById("texto");
        elemento.innerHTML += contador+" desde if contador == 2-------------------";
    } else if(contador == 3) {
        document.getElementById('imagen').src = imagenesHabilitadas[3];
        contador++;
        var elemento = document.getElementById("texto");
        elemento.innerHTML += contador+" desde if contador == 3--------------------";
    } else if(contador == 4) {
        document.getElementById('imagen').src = imagenesHabilitadas[4];
        contador++;
        var elemento = document.getElementById("texto");
        elemento.innerHTML += contador+" desde if contador == 4--------------------";
    } else {
        boton.derechita.disable=true;
        var elemento = document.getElementById("texto");
        elemento.innerHTML += contador+" nada massssss serpiente soy perrin--------------------";
    }

}
function generar() {
    document.getElementById('imagen').src = '/Galeria/Imagenes/check.gif';
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
    //ASIGNANDO 5 FOTOGRAFIAS ALEATORIAS. 
    for (i=0;i<=4;i++) {
        if (indice == imagenesTotal.length) indice = 0;
        imagenesHabilitadas[i] = imagenesTotal[indice];
        indice++;
    }
}

var contador=0;

function moverDerecha(boton){
    if(contador == 0) {
        document.getElementById('imagen').src = imagenesHabilitadas[0];
        document.getElementById('imagen').src = imagenesHabilitadas[4];
        document.getElementById("mov2").style.backgroundColor='rgb(144, 179, 217)';
        document.getElementById("mov2").style.color='rgb(5, 30, 84)';
        document.getElementById('mov2').style.border='5px solid rgb(5, 30, 84)';
        contador++;
    } else if(contador == 1) {
        document.getElementById('imagen').src = imagenesHabilitadas[1];
        contador++;
    } else if(contador == 2) {
        document.getElementById('imagen').src = imagenesHabilitadas[2];
        contador++;
    } else if(contador == 3) {
        document.getElementById('imagen').src = imagenesHabilitadas[3];
        contador++;
    } else if(contador == 4) {
        document.getElementById('imagen').src = imagenesHabilitadas[4];
        document.getElementById("mov1").style.backgroundColor='#aaa';
        document.getElementById("mov1").style.color='#aaa';
        document.getElementById('mov1').style.border='#aaa';
        contador++;
    } else {
        boton.derechita.disable = true;
    }
}

function moverIzquierda(boton){
    if(contador == 5) {
        document.getElementById('imagen').src = imagenesHabilitadas[4];
        document.getElementById("mov1").style.backgroundColor='rgb(144, 179, 217)';
        document.getElementById("mov1").style.color='rgb(5, 30, 84)';
        document.getElementById('mov1').style.border='5px solid rgb(5, 30, 84)';
        contador = contador - 1;
    } else if(contador == 4) {
        document.getElementById('imagen').src = imagenesHabilitadas[3];
        contador = contador -1;
    } else if(contador == 3) {
        document.getElementById('imagen').src = imagenesHabilitadas[2];
        contador = contador -1;
    } else if(contador == 2) {
        document.getElementById('imagen').src = imagenesHabilitadas[1];
        contador = contador -1;
    } else if(contador == 1) {
        document.getElementById('imagen').src = imagenesHabilitadas[0];
        document.getElementById("mov2").style.backgroundColor='#aaa';
        document.getElementById("mov2").style.color='#aaa';
        document.getElementById('mov2').style.border='#aaa';
        contador = contador -1;
    } else {
        boton.izquierdita.disable=true;
    }

}
var indice = 0;
imagenesHabilitadas = new Array();
imagenesTotal = new Array();
imagenesTotal[0] = '<img src="/Galeria/Imagenes/bandera.jpg" width="780" height="400"/>';
imagenesTotal[1] = '<img src="/Galeria/Imagenes/bitri.png" width="780" height="400"/>';
imagenesTotal[2] = '<img src="/Galeria/Imagenes/ElMasGrande.jpg" width="780" height="400"/>';
imagenesTotal[3] = '<img src="/Galeria/Imagenes/elnacional13estrellas.jpg" width="780" height="400"/>';
imagenesTotal[4] = '<img src="/Galeria/Imagenes/ElNacional2019.jpg" width="780" height="400"/>';
imagenesTotal[5] = '<img src="/Galeria/Imagenes/ElNacionalCD.jpg" width="780" height="400"/>';
imagenesTotal[6] = '<img src="/Galeria/Imagenes/indumentaria.jpg" width="780" height="400"/>';
imagenesTotal[7] = '<img src="/Galeria/Imagenes/MareaRoja.jpg" width="780" height="400"/>';
imagenesTotal[8] = '<img src="/Galeria/Imagenes/NachoTuPapa.jpg" width="780" height="400"/>';
imagenesTotal[9] = '<img src="/Galeria/Imagenes/NachoTuPapaHinchada.jpg" width="780" height="400"/>';
indice = Math.random() * (imagenesTotal.length);
indice = Math.floor(indice);
for (i=0;i<=4;i++) {
    if (indice == imagenesTotal.length) indice = 0;
    imagenesHabilitadas[i] = imagenesTotal[indice];
    indice++;
}
for(i=0;i<=imagenesHabilitadas.length;i++){
   document.write(imagenesHabilitadas[i]);
}
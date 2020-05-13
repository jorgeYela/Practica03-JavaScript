# Practica03-JavaScript

FORMULARIO:

1. Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:
a) Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador. 
Mediante el modulo 10 se multiplicara cada digito, para posteriormente igualar el ultimo digito de la cedula con los resultados anteriormente obtenido, de ser iguales, la cedula es correcta. 

b) Se debe validar qué, en el campo de los nombres, ingrese exclusivamente dos nombres y que permita ingresar sólo letras, por ejemplo: “Gabriel Alejandro”, es válido; “Gabriel”, no es válido. 
Mediante un recorriedo de array, al elemento insertado en el campo de texto podremos verificar si el mismo cuanta con dos componentes o solamente con uno. 

c) Se debe validar qué, en el campo de los apellidos, ingrese exclusivamente dos apellidos y que permita ingresar sólo letras, por ejemplo: “León Paredes”, es válido; “León”, no es válido.
Mediante un recorriedo de array, al elemento insertado en el campo de texto podremos verificar si el mismo cuanta con dos componentes o solamente con uno. 

d)	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10 caracteres numéricos
Se realizara la comparacion mediante if determinando un rango de codigo ascii aceptado, mientras tambien se va haciendo un conteo de caracteres permitidos, si este conteo llega a 10 el tamaña (lenght) se reducira, sin permitir el ingreso de mas de 10 caracteres en el campo en cuestion. 

e) Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”. 
Se determinara la creacion de un cursor, que encuentre en la cadena de texto ingrsada el signo de @ y a partir de este realice comparaciones, con el fin de determinar los dominios permitidos.

GALERIA:

a) Arreglo de vector:
Se guardar todas las referencias a cada imagen en un vector, asignando a cada imagen, como es obvio, un indice que nos permitira seleccionarlas aleatoriamente.

b) 5 imagenes Aleatorias:
Mediante el metodo random(), podremos elegir del arreglo total de 10 imagenes, solo las 5 que seran precentadas en la galeria. 

c) Al momento de llegar a los posicionamientos finales de cada imagen, el contador le indicara al boton cuando entra en estado de inabilitado, esto mediante el metodo botton.disable = ture o false. 

CALCULADORA: 

a) Mediante el metodo eval() podremos evaluar la cadena matematica ingresada en el campo de texto, siempre que sea valida.

b) Se a integrado el boton clear, que limpia totalmente la caja de texto, haciendo uso del evento onclick para que al momento de presionar el boton la caja de texto se limpie de valores. 

c) Se a integrado el boton borrar, que midiendo el tamaño de la cadena ngresada en el campo de texto, por cada click, esperado despues del evento onclick(), borrara la cadena caracter por caracter, teniendo como punto de partida el tamaño total de la cadena ingresada. 

REPOSITORIO GITHUB: 
URL: https://github.com/jorgeYela/Practica03-JavaScript.git
Usuario: jorgeYela

RESULTADO(S) OBTENIDO(S): Mediante esta práctica he podido entender la estructura necesaria para brindar a las páginas web, funcionalidades basadas en eventos que permite, mediante una acción, obtener respuestas validada y manejadas por el manejo lógico de java script. 

CONCLUSIONES: Para brindar la mejor experiencia al cliente y asegurar el acertado y correcto manejo de distintos tipos de datos, es necesario manejar java script, ya que nos permite, mediante la interacción con el usuario, llevar a cabo procedimientos que arrojen determinados resultados, precisos y confiables.

RECOMENDACIONES: Revisar el material facilitado por el docente y asistir a las horas de clases.  

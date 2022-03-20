Puede cambiar el Contenido

<html>
<body>

<h2> ¿Qué puede hacer JavaScript?</h2>

<p id="demo"> 
JavaScript puede cambiar el contenido HTML.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hola JavaScript!"'>Click Me!</button>

</body>
</html>

A - Cambiar valores de los atributos

<html>
<body>

<h2>¿Que puede hacer JavaScript?</h2>

<p>
JavaScript puede cambiar los valores de los atributos HTML.</p>

<p>
En este caso, JavaScript cambia el valor del atributo src (fuente) de una imagen.</p>

<button onclick="document.getElementById('myImage').src='apagada.jpg'">
Apaga la luz</button>

<img id="myImage" src="apagada.jpg" style="width:100px">

<button onclick="document.getElementById('myImage').src='encendida.jpg'">
Enciend la luz</button>

</body>
</html>

B - Estilo de Elemento


 <html>
<body>

<h2> ¿Qué puede hacer JavaScript? </h2>

<p id = "demo"> JavaScript puede cambiar el estilo de un elemento HTML. </p>

<button type = "button" onclick = "document.getElementById ('demo'). style.fontSize = '35px'"> ¡Haga clic aqui! </button>

</body>
</html>


C - Ocultar elementos HTML

 <html>
<body>

<h2> ¿Qué puede hacer JavaScript? </h2>

<p id = "demo"> JavaScript puede ocultar elementos HTML. </p>

<button type = "button" onclick = "document.getElementById ('demo'). style.display = 'none'"> ¡Haga clic aqui! </button>

</body>
</html>

D - Documento html

<html>
<body>

<h2> JavaScript en el cuerpo </h2>

<p id = "demo"> </p>

<script>
document.getElementById ("demo"). innerHTML = "Mi primer JavaScript";
</script>

</body>
</html>


E - Funcion 

<html>
<head>
<script>
function myFunction () {
  document.getElementById ("demo"). innerHTML = "Párrafo cambiado";
}
</script>
</head>
<body>

<h2> JavaScript en Head </h2>

<p id = "demo"> Un párrafo. </p>

<button type = "button" onclick = "myFunction ()"> Pruébelo </button>

</body>
</html>


F - Parrafo

<html>
<body>

<h2> JavaScript en el cuerpo </h2>

<p id = "demo"> Un párrafo. </p>

<button type = "button" onclick = "myFunction ()"> Pruébelo </button>

<script>
function myFunction () {
  document.getElementById ("demo"). innerHTML = "Párrafo cambiado";
}
</script>

</body>
</html>

 function myFunction() {
 document.getElementById("demo").innerHTML = "Paragraph changed.";
}


 <html>
<body>

<h2> JavaScript externo </h2>

<p id = "demo"> Un párrafo. </p>

<button type = "button" onclick = "myFunction ()"> Pruébelo </button>

<p> (myFunction se almacena en un archivo externo llamado "myScript.js") </p>

<script src = "myScript.js"> </script>

</body>
</html>

Ejercicios - Contenido


 <html>
<body>

<h2> Mi primera página web </h2>
<p> Mi primer párrafo. </p>

<p id = "demo"> </p>

<script>
document.getElementById ("demo"). innerHTML = 5 + 6;
</script>

</body>
</html>



 <html>
<body>

<h2> Mi primera página web </h2>
<p> Mi primer párrafo. </p>

<p> Nunca llame a document.write después de que el documento haya terminado de cargarse.
Sobreescribirá todo el documento. </p>

<script>
document.write (5 + 6);
</script>

</body>
</html>




 <html>
<body>

<h2> Mi primera página web </h2>
<p> Mi primer párrafo. </p>

<button type = "button" onclick = "document.write (5 + 6)"> Pruébelo </button>

</body>
</html>



 <html>
<body>

<h2> Mi primera página web </h2>
<p> Mi primer párrafo. </p>

<script>
window.alert (5 + 6);
</script>

</body>
</html>



 <html>
<body>

<h2> Activar depuración </h2>

<p> F12 en su teclado activará la depuración. </p>
<p> Luego seleccione "Consola" en el menú del depurador. </p>
<p> Luego haga clic en actualizar nuevamente. </p>

<script>
console.log (5 + 6);
</script>

</body>
</html>



 <html>
<body>

<h2> El método window.print () </h2>

<p> Haga clic en el botón para imprimir la página actual. </p>

<button onclick = "window.print ()"> Imprimir esta página </button>

</body>
</html>


Declaraciones -Js

 <html>
<body>

<h2> Declaraciones de JavaScript </h2>

<p> Un <b> programa de JavaScript </b> es una lista de <b> declaraciones </b> que debe ejecutar una computadora. </p>

<p id = "demo"> </p>

<script>
var x, y, z; // Declaración 1
x = 5; // Declaración 2
y = 6; // Declaración 3
z = x + y; // Declaración 4

document.getElementById ("demo"). innerHTML =
"El valor de z es" + z + ".";
</script>

</body>
</html>



 <html>
<body>

<h2> Declaraciones de JavaScript </h2>

<p> En HTML, el navegador ejecuta las declaraciones de JavaScript. </p>

<p id = "demo"> </p>

<script>
document.getElementById ("demo"). innerHTML = "Hola Dolly";
</script>

</body>
</html>


 <html>
<body>

<h2> Declaraciones de JavaScript </h2>

<p> Las declaraciones de JavaScript están separadas por punto y coma. </p>

<p id = "demo1"> </p>

<script>
var a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById ("demo1"). innerHTML = c;
</script>

</body>
</html>



<html>
<body>

<p id="demo"> </p>
<script>
document.getElementById("demo").innerHTML = 10.50;
</script>

</body>
</html>


 <html>
<body>

<p id="demo"> </p>
<script>
document.getElementById("demo").innerHTML = 10.50;
</script>

</body>
</html>



<html>
<body>

<p id="demo"> </p>
<p id="demo2"> </p>
<script>
document.getElementById("demo").innerHTML = 'John Doe' ;
</script>
<script>
document.getElementById("demo2").innerHTML = "John Doe" ;
</script>


</body>
</html>


 <html>
<body>
<p id="demo"></p>
<script>
var x;
x = 5;
document.getElementById("demo").innerHTML = x * 10;
</script>


</body>
</html>

Expresiones Js

<html>
<cuerpo>
<h2> Expresiones de JavaScript </h2>
<p> Las expresiones se calculan en valores. </p>
<p id = "demo"> </p>
<script>
document.getElementById ("demo"). innerHTML = "John" + "" + "Doe";
</script>
</body>
</html>


Crear variantes

<html>
<body>

<h2> La palabra clave var crea variables </h2>

<p id = "demo"> </p>

<script>
var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById ("demo"). innerHTML = y;
</script>

</body>
</html>



 <html>
<body>
<h2> JavaScript distingue mayúsculas y minúsculas </h2>
<p> Intente cambiar apellido por apellido. </p>
<p id = "demo"> </p>
<script>
var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
document.getElementById ("demo"). innerHTML = lastName;
</script>
</body>
</html>


Ejercicios

A)

 <html>
<body>
<p id="demo"></p>

<script>
var person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo").innerHTML = carName;
</script>

</body>
</html>


Respuesta

var person = "Stella Le",
carName = "Nissa",
price = 300;


B)
Crea un variable llamada conejos y asígnale el valor 126. Y mostrar en pantalla


Respuesta

 <html>
<body>
<p id="demo"></p>

<script>
var conejos = 126;
document.getElementById("demo").innerHTML = conejos;
</script>

</body>
</html>


C)
Crea una variable llamada zanahorias asígnale el valor 0. Y mostrar en pantalla


Respuesta 

<html>
<body>
<p id="demo"></p>

<script>
var zanahoria = "0",

document.getElementById("demo").innerHTML = zanahoria;
</script>

</body>
</html>


D)
Modifica el valor de la variable conejos por 150. Y muestra en pantalla el valor inicial y el nuevo valor.

Respuesta

<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<script>
var conejos = 126, zanahorias = 0;
document.getElementById("demo").innerHTML = "conejos iniciales: "+ conejos;
document.getElementById("demo2").innerHTML = "zanahorias: "+ zanahorias;
conejos = 150;
document.getElementById("demo3").innerHTML = "conejos actuales: "+ conejos;
</script>

</body>
</html>


E)
Copia el valor de la variable conejos en la variable zanahorias.
Y mostrar en pantalla el nuevo valor de Zanahorias.

Respuesta

<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<script>
var conejos = 126, zanahorias = 0;
document.getElementById("demo").innerHTML = "conejos iniciales: "+ conejos;
document.getElementById("demo2").innerHTML = "zanahorias: "+ zanahorias;
conejos = 150;
zanahorias = conejos;
document.getElementById("demo3").innerHTML = "conejos actuales: "+ conejos;
document.getElementById("demo4").innerHTML = "zanahorias actuales: "+ zanahorias;
</script>

</body>
</html>


F)
Modifica el valor de conejos por 250 y muestra las dos variables.

Respuesta

<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<p id="demo5"></p>
<p id="demo6"></p>
<script>
var conejos = 126, zanahorias = 0;
document.getElementById("demo").innerHTML = "conejos iniciales: "+ conejos;
document.getElementById("demo2").innerHTML = "zanahorias iniciales: "+ zanahorias;
conejos = 150;
zanahorias = conejos;
document.getElementById("demo3").innerHTML = "conejos actuales: "+ conejos;
document.getElementById("demo4").innerHTML = "zanahorias actuales: "+ zanahorias;
conejos = 250;
document.getElementById("demo5").innerHTML = "conejos modificados: "+ conejos;
document.getElementById("demo6").innerHTML = "zanahorias sin modificar: "+ zanahorias;
</script>

</body>
</html>


G)
Calcula las siguientes operaciones y muéstralas en pantalla:
3 + 6       5 –4          6 * 3           8 / 2       7 / 2.

Respuesta

<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>

<script>

var suma = 3+6
resta= 5-4;
multiplicacion=6*3;
division=8/2

document.getElementById("demo").innerHTML = suma;
document.getElementById("demo2").innerHTML = resta;


document.getElementById("demo3").innerHTML = multiplicacion;

document.getElementById("demo4").innerHTML = division;
</script>

</body>
</html>


H)
Escribe las expresiones siguientes en código:
1 más 6, 3 multiplicado por 5, 12 menos 8 y 12 dividido entre 4. Y mostrar en pantalla.

Respuesta

<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<script>
var a = 1, b = 6, c = 3, d = 5, e = 12, f = 8, g = 12, h = 4;
document.getElementById("demo").innerHTML = a+" + "+b+" = "+(a+b);
document.getElementById("demo2").innerHTML = c+" * "+d+" = "+(c*d);
document.getElementById("demo3").innerHTML = e+" - "+f+" = "+(e-f);
document.getElementById("demo4").innerHTML = g+" / "+h+" = "+(g/h);
</script>

</body>
</html>


I)
Coloca los paréntesis en su lugar correspondiente para la expresión 4 + 5 * 6 de forma que:
a. realice primero las sumas. Y mostrar en pantalla
b. realice primero las multiplicaciones. Y mostrar en pantalla

Respuesta

<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>


<script>

var operacion1 = 4 + (5*6), operacion2= (4+5)*6;


document.getElementById("demo").innerHTML = "Primero suma " + operacion1;
document.getElementById("demo2").innerHTML = "Primero multilplica " + operacion2;



</script>

</body>
</html>


J)
M es dividido entre 3 y almacenado en la variable p
M menos 6 almacenado en la variable q
Almacenar un valor en M mayor a 100 y mostrar resultado en pantalla.


Respuesta

<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>


<script>

var m=120, p=m /3, q=m-6;


document.getElementById("demo").innerHTML = p;
document.getElementById("demo2").innerHTML = q;



</script>

</body>
</html>


K)
Escribe la palabra elefante dentro de una variable llamada animal. 

Escribe la palabra rosa dentro de una variable llamada color.

Crea una variable llamada imagina donde se almacenen las dos variables anteriores:
animal y color dando como resultado el valor elefante rosa.

 En la variable imagina intercala un espacio en blanco para separar las dos palabras.


 Respuesta 

 <html>
<body>
<p id="demo"></p>
<script>
var animal = "elefante", color = "rosa", imagina = animal+" "+color;
document.getElementById("demo").innerHTML = imagina;
</script>

</body>
</html>

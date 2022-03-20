Ejercicios y Respuestas


<html>
<body>

<h2>JavaScript Variables</h2>



<p id="demo"></p>
<p id="demo2"></p>

<script>
y = 8;
x = 5;
document.getElementById("demo").innerHTML = x;
document.getElementById("demo2").innerHTML = y;
</script>

</body>
</html>

Nota:


var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;



<html>
<body>

<h2>JavaScript Variables</h2>



<p id="demo"></p>


<script>
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;

document.getElementById("demo").innerHTML = text3;

</script>

</body>
</html>



<html>
<body>

<h2>JavaScript Variables</h2>

<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
var x = 5 + 5 + "5";
var y = "5" + 5 + 5;
var z = "Hello" + 5;
document.getElementById("demo").innerHTML = x;
document.getElementById("demo2").innerHTML = y;
document.getElementById("demo3").innerHTML = z;

</script>

</body>
</html>



<html>
<body>
<h2> Booleanos de JavaScript </h2>
<p> Los booleanos pueden tener dos valores: verdadero o falso: </p>
<p id = "demo"> </p>
<script>
var x = 5;
var y = 5;
var z = 6;
document.getElementById ("demo"). innerHTML =
(x == y) + "<br>" + (x == z);
</script>
</body>
</html>



<html>
<body>

<h2>JavaScript Variables</h2>

<p id="demo"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
var x = "Volvo";
var y = "Mercedes Benz";
var z = "Fiat";

document.getElementById("demo").innerHTML = x;
document.getElementById("demo2").innerHTML = y;
document.getElementById("demo3").innerHTML = z;

</script>

</body>
</html>



 <html>
<body>
<h2> Matrices de JavaScript </h2>
<p> Los índices de matriz están basados en cero, lo que significa que el primer elemento es [0]. </p>
<p id = "demo"> </p>
<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById ("demo"). innerHTML = cars [0];
</script>
</body>
</html>



<html>
<body>
<h2>JavaScript Objects</h2>
<p id="demo"></p>
<script>
var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>
</body>
</html>


<html>
<body>
<h2>JavaScript Objects</h2>
<p id="demo"></p>
<script>
var person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old, and his eyes are " + person.eyeColor;
</script>
</body>
</html>




 <html>
<body>

<h2> JavaScript typeof </h2>
<p> El operador typeof devuelve el tipo de una variable o una expresión. </p>
<p id = "demo"> </p>
<script>
document.getElementById ("demo"). innerHTML =
typeof "" + "<br>" +
typeof "John" + "<br>" +
typeof "John Doe";
</script>
</body>
</html>




 <html>
<body>

<h2> JavaScript typeof </h2>
<p> El operador typeof devuelve el tipo de una variable o una expresión. </p>
<p id = "demo"> </p>
<script>
document.getElementById ("demo"). innerHTML =
typeof 0 + "<br>" +
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);
</script>
</body>
</html>




 <html>
<body>

<h2>JavaScript</h2>

<p>The value (and the data type) of a variable with no value is <b>undefined</b>.</p>

<p id="demo"></p>

<script>
var car;
document.getElementById("demo").innerHTML =
car + "<br>" + typeof car;
</script>

</body>
</html>



 <html>
<body>
<h2> JavaScript </h2>
<p> Las variables se pueden vaciar si establece el valor en <b> indefinido </b>. </p>
<p id = "demo"> </p>
<script>
var car = "Volvo";
car = undefined;
document.getElementById ("demo"). innerHTML =
car + "<br>" + typeof car;
</script>

</body>
</html>



 <html>
<body>
<h2> JavaScript </h2>
<p> Una cadena vacía tiene un valor legal y un tipo: </p>
<p id = "demo"> </p>
<script>
var car = "";
document.getElementById ("demo"). innerHTML =
"El valor es:" +
car + "<br>" +
"El tipo es:" + typeof car;
</script>
</body>
</html>



 <html>
<body>
<h2> JavaScript </h2>
<p> Los objetos se pueden vaciar estableciendo el valor en <b> null </b>. </p>
<p id = "demo"> </p>
<script>
var person = {firstName: "John", lastName: "Doe", edad: 50, eyeColor: "blue"};
persona = null;
document.getElementById ("demo"). innerHTML = typeof person;
</script>
</body>
</html>



 <html>
<body>
<h2> JavaScript </h2>
<p> undefined y null son iguales en valor pero diferentes en tipo: </p>
<p id = "demo"> </p>

<script>
document.getElementById ("demo"). innerHTML =
typeof undefined + "<br>" +
typeof null + "<br> <br>" +
(null === undefined) + "<br>" +
(null == undefined);
</script>
</body>
</html>



 <html>
<body>

<h2> JavaScript typeof </h2>
<p> El operador typeof devuelve el tipo de una variable o una expresión. </p>
<p id = "demo"> </p>
<script>
document.getElementById ("demo"). innerHTML =
typeof "juan" + "<br>" +
typeof 3.14 + "<br>" +
typeof true + "<br>" +
typeof false + "<br>" +
typeof x;
</script>
</body>
</html>



 <html>
<body>
<h2> JavaScript typeof </h2>
<p> El operador typeof devuelve objetos para ambos objetos, matrices y nulos. </p>
<p> El operador typeof no devuelve objetos para funciones. </p>
<p id = "demo"> </p>

<script>
document.getElementById ("demo"). innerHTML =
typeof {nombre: 'john', edad: 34} + "<br>" +
typeof [1,2,3,4] + "<br>" +
typeof null + "<br>" +
typeof function myFunc () {};
</script>

</body>
</html>


 if (expresión) { 
   //acciones a realizar en caso positivo 
   //... 
} else { 
   //acciones a realizar en caso negativo 
   //... 
}


 <html>
<body>
<h2> JavaScript typeof </h2>
<p> El operador typeof devuelve objetos para ambos objetos, matrices y nulos. </p>
<p> El operador typeof no devuelve objetos para funciones. </p>
<p id = "demo"> </p>

<script>
	 var x = 2;
	 var y = 5;
	 var z = x + y;
	 if (z > 4)
	 	{ 
	 		document.getElementById ("demo"). innerHTML = z +" es mayor que 4 (cuatro)"
	      } 
     else 
     	{  document.getElementById ("demo"). innerHTML =z + " es menor que 4 (cuatro)"
       }
</script>

</body>
</html>


Pregunta

 if (dia == "lunes") 
   document.write ("Que tengas un feliz comienzo de semana")

Respuesta
 <script>
	var dia= "lunes";
	
	if (dia == "lunes") 
	 	 { document.write ("Que tengas un feliz comienzo de semana")
	      } 
     else 
     	{  document.write ("que tengas un buen dia")
       }
</script>



Pregunta

 <html>
<body>

<p id = "demo"> </p>

<script>
var dia= "lunes";
	
	if (dia == "lunes") 
	 	 { document.write ("Que tengas un feliz comienzo de semana")
	      } 
     else 
     	{  document.write ("que tengas un buen dia")
       }
</script>

</body>
</html>
 if (edad > 18) 
   document.write("puedes ver esta página para adultos")
   
   
   Respuesta
    <html>
<body>

<p id = "demo"> </p>

<script>
var edad= 23;
  
  if (edad >= 18) 
     { document.write ("Puedes ver esta página para adultos")
        } 
     else 
      {  document.write ("Eres muy pequeño para ver esta película")
       }
</script>

</body>
</html>



<html>
<body>

<p id = "demo"> </p>

<script>
var numero1=23 
var numero2=63 
if (numero1 == numero2){ 
   document.write("Los dos números son iguales") 
}else{ 
   if (numero1 > numero2) { 
      document.write("El primer número es mayor que el segundo") 
   }else{ 
      document.write("El primer número es menor que el segundo") 
   } 
}

</script>

</body>
</html>



<html>
<body>



<script>
var i ;
for (i=0;i<=10;i++) { 
   	document.write(i);
   	document.write("<br>") ;
}

</script>

</body>
</html>

Pregunta

Lo que deseamos escribir en una página web mediante JavaScript es lo siguiente:

<H1>Encabezado de nivel 1</H1> 
<H2>Encabezado de nivel 2</H2> 
<H3>Encabezado de nivel 3</H3> 
<H4>Encabezado de nivel 4</H4> 
<H5>Encabezado de nivel 5</H5> 
<H6>Encabezado de nivel 6</H6>
Para ello tenemos que hacer un bucle que empiece en 1 y 
termine en 6 y en cada iteración escribiremos el encabezado que toca.


Respuesta

<script>
var i ;
for (i=1;i<=6;i++) { 
   	document.write("<Hi>Encabezado de nivel " i "</Hi>" );
   	document.write("<br>") ;
}

</script>


Presgunta

 var color = "" 
while (color != "rojo"){ 
   	color = prompt("dame un color (escribe rojo para salir)","") 
}

Respuesta

<html>
<body>

<p id = "demo"> </p>

<script>
var color; 
do { 
   	color = prompt("dame un color (escribe rojo para salir)","") ;
} while (color != "rojo")


</script>

</body>
</html>
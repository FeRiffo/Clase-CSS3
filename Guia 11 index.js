Contenido

 <html>
<body>

<p>Click the button to demonstrate the prompt box.</p>

<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
</script>
</body></html>



<html>
<body>

<p>Click the button to display a dialog box which will ask for your favorite drink.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var text;
  var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
  switch(favDrink) {
    case "Martini":
      text = "Excellent choice. Martini is good for your soul.";
      break;
    case "Daiquiri":
      text = "Daiquiri is my favorite too!";
      break;
    case "Cosmopolitan":
      text = "Really? Are you sure the Cosmopolitan is your favorite?";
      break;
    default:
      text = "I have never heard of that one..";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>



<html>
<body>

<p>Click the button to display an alert box.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  alert("Hello! I am an alert box!");
}
</script>

</body>
</html>




<html>
<body>

<p>Click the button to demonstrate line-breaks in an alert box.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  alert("Hello\nHow are you?");
}
</script>

</body>
</html>



<html>
<body>

<p>Click the button to display a confirm box.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var txt;
  var r = confirm("Press a button!");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>
Entrada y salida de datos con formularios
<!DOCTYPE html>
<html>
<head>
    <title>Entrada y salida de datos...</title>
</head>
<body>
    <form action="">
        <input type="text" id="cuadro" >
        <input type="submit" value="Aceptar" onclick="var valor= document.getElementById('cuadro').value;
            alert(valor);
        ">
    </form>
</body>
</html>



Ejercicios


 1.	
 Pide la edad y si es mayor de 18 años indica que ya puede conducir.

Respuesta

 <html>
<body>

<p>Click the button to demonstrate the prompt box.</p>

<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
  var person = prompt("Escribe tu edad por favor!",);
  if (person != >18) {
    document.getElementById("demo").innerHTML =
     "tu edad es de" + person + "y podes manejar!!";
   else  
   	 document.getElementById("demo").innerHTML =
     "tu edad es de" + person + "y NO podes manejar!!";
  }
}
</script>
</body></html>

Correccion

<html>
<body>

<p>Click the button to demonstrate the prompt box.</p>

<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
  var txt;

  var edad =  prompt("Que edad tienes?", "");
  if (edad >=18) {
    txt = "Puedes conducir";
  } else {
    txt = "No puedes conducir";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>


</body></html>





2. Pide una nota (número). Muestra la calificación según la nota:
	0-3: Muy deficiente
	3-5: Insuficiente
	5-6: Suficiente
	6-7: Bien
	7-9: Notable
	9-10: Sobresaliente


Respuesta


<script>
//BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA
do {
	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
	var nota = prompt("Introduce tu nota");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(nota) == nota) {
		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		//SI LA NOTA NO ES ENTRE 0 Y 10
		else {
			alert("Nota erronea");
		}
	}
	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
	}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
} while (nota != undefined);	//Undefined es cuando se pulsa Cancelar.
</script>


<script>
//BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA
do {
	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
	var nota = prompt("Introduce tu nota");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(nota) == nota) { //validacion de datos
		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
		if (nota > 0 && nota <= 10) { //validacion de datos
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		//SI LA NOTA NO ES ENTRE 0 Y 10
		else {
			alert("Nota erronea");
		}
	}
	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
	}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
} while (nota != undefined);	//Undefined es cuando se pulsa Cancelar.
</script>


Pregunta

 <script>

var suma = 0;
do {
    var numero = prompt("Introduce un numero");


    if (Number(numero) == numero) {

        numero = Number(numero);
    
        suma = suma + numero;
        alert ("hasta ahora la suma es " + suma)
    }

  
    else {

        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }


} 


while (numero != undefined);

document.write("el total es " + suma);
</script>



<html>
<body>

<h2> Objetos JavaScript </h2>

<p id = "demo"> </p>

<script>
// Crear un objeto:
var car = {type: "Fiat", modelo: "500", color: "blanco"};

// Muestra algunos datos del objeto:
document.getElementById ("demo"). innerHTML = "El tipo de auto es" + car.type;
</script>

</body>
</html>

3.
Pregunta

<html>
<body>

<h2> Objetos JavaScript </h2>

<p id = "demo"> </p>

<script>
// Crear un objeto:
var person = {firstName: "John", lastName: "Doe", edad: 50, eyeColor: "blue"};

// Muestra algunos datos del objeto:
document.getElementById ("demo"). innerHTML =
person.firstName + "tiene" + person.edad + "años"
</script>
</body>
</html>

Pregunta

objeto alumnos y tenga nombre apellido legajo y materia que cursa
 y muestre en la pantalla el nombre el legajo y la materia que cursa



Respuesta

<html>
<body>

<h2> Objetos JavaScript </h2>

<p id = "demo"> </p>

<script>
// Crear un objeto:
var Alumno1 = {firstName: "John", lastName: "Doe", Legajo: 503215, Materia: "matematicas"};

// Muestra algunos datos del objeto:
document.getElementById ("demo"). innerHTML =
Alumno1.firstName + " el legajo es " + Alumno1.Legajo + " y cursa " + Alumno1.Materia
</script>
</body>
</html>


Ejercicios y contenido de clase


 <html>
<body>

<h2> Objetos JavaScript </h2>

<p> Un método de objeto es una definición de función, almacenada como un valor de propiedad. </p>

<p id = "demo"> </p>

<script>
// Crear un objeto:
var person = {
  firstName: "John",
  apellido: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.apellido;
  }
};
// Mostrar datos del objeto:
document.getElementById ("demo"). innerHTML = person.fullName ();
</script>

</body>
</html>


<html>
<body>

<button onclick = "document.getElementById ('demo'). innerHTML = Date ()"> ¿Es la hora? </button>

<p id = "demo"> </p>

</body>
</html>


<html>
<body>

<button onclick = "this.innerHTML = Date ()"> ¿La hora es? </button>

</body>
</html>


<html>
<body>

<p> Haga clic en el botón para mostrar la fecha. </p>

<button onclick = "displayDate ()"> ¿Es la hora? </button>

<script>
function displayDate () {
  document.getElementById ("demo"). innerHTML = Date ();
}
</script>

<p id = "demo"> </p>

</body>
</html>


 <html>
<body>

<h2>JavaScript String Properties</h2>

<p>The length property returns the length of a string:</p>

<p id="demo"></p>

<script>
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = txt.length;
</script>

</body>
</html>


<html>
<body>

<h2>JavaScript Statements</h2>

<p>
The best place to break a code line is after an operator or a comma.
</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"Hello Dolly!";
</script>

</body>
</html>


<html>
<body>

<h2>JavaScript Strings</h2>

<p>
You can break a code line within a text string with a backslash.
</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
</script>

</body>
</html>



<html>
<body>

<h2>JavaScript Strings</h2>

<p>The safest way to break a code line in a string is using string addition.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>

<script>
var x = "John";        // x is a string
var y = new String("John");  // y is an object

document.getElementById("demo").innerHTML =
typeof x + "<br>" + typeof y;
</script>

</body>
</html>


 <html>
<body>

<h2>JavaScript String Methods</h2>

<p>The indexOf() method returns the position of the first occurrence of a specified text:</p>

<p id="demo"></p>

<script>
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo").innerHTML = pos;
</script>

</body>
</html>


<html>
<body>

<h2>JavaScript String Methods</h2>

<p>The lastIndexOf() method returns the position of the last occurrence of a specified text:</p>

<p id="demo"></p>

<script>
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.getElementById("demo").innerHTML = pos;
</script>

</body>
</html>


 <html>
<body>

<h2>JavaScript String Methods</h2>

<p>Both indexOf(), and lastIndexOf() return -1 if the text is not found:</p>

<p id="demo"></p>

<script>
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("John");
document.getElementById("demo").innerHTML = pos;
</script>

</body>
</html>



 <html>
<body>

<h2>JavaScript String Methods</h2>

<p>The slice() method extract a part of a string
and returns the extracted parts in a new string:</p>

<p id="demo"></p>

<script>
var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
document.getElementById("demo").innerHTML = res; 
</script>

</body>
</html>


 <html>
<body>

<h2>JavaScript String Methods</h2>

<p>The substr() method extract a part of a string
and returns the extracted parts in a new string:</p>

<p id="demo"></p>

<script>
var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);
document.getElementById("demo").innerHTML = res;
</script>

</body>
</html>


 <html>

<body>

<h2>JavaScript String Methods</h2>

<p>Replace "Microsoft" with "Google" in the paragraph below:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Please visit Microsoft!</p>

<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace("Microsoft","Google");
  document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>


 <html>
<body>

<p>Click "Try it" to display the first array element, after a string split.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var str = "a,b,c,d,e,f";
  var arr = str.split(",");
  document.getElementById("demo").innerHTML = arr[0];
}
</script>

</body>
</html>

Contenido

 <html>
<body>

<h2>JavaScript Number Methods</h2>

<p>The toString() method converts a number to a string.</p>

<p id="demo"></p>

<script>
var x = 123;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();
</script>

</body>
</html>


 <html>
<body>

<h2>JavaScript Number Methods</h2>

<p>The toExponential() method returns a string, with the number rounded and written using exponential notation.</p>

<p>An optional parameter defines the number of digits behind the decimal point.</p>

<p id="demo"></p>

<script>
var x = 9.656;
document.getElementById("demo").innerHTML =
  x.toExponential() + "<br>" + 
  x.toExponential(2) + "<br>" + 
  x.toExponential(4) + "<br>" + 
  x.toExponential(6);
</script>

</body>
</html>



<html>
<body>

<h2>JavaScript Number Methods</h2>

<p>The toFixed() method rounds a number to a given number of digits.</p>
<p>For working with money, toFixed(2) is perfect.</p>

<p id="demo"></p>

<script>
var x = 9.656;
document.getElementById("demo").innerHTML =
  x.toFixed(0) + "<br>" +
  x.toFixed(2) + "<br>" +
  x.toFixed(4) + "<br>" +
  x.toFixed(6);
</script>

</body>
</html>



 <html>
<body>

<h2>JavaScript Number Methods</h2>

<p>The toPrecision() method returns a string, with a number written with a specified length:</p>

<p id="demo"></p>

<script>
var x = 9.656;
document.getElementById("demo").innerHTML = 
  x.toPrecision() + "<br>" +
  x.toPrecision(2) + "<br>" +
  x.toPrecision(4) + "<br>" +
  x.toPrecision(6);  
</script>

</body>
</html>



 <html>
<body>

<h2>JavaScript Number Methods</h2>

<p>The valueOf() method returns a number as a number:</p>

<p id="demo"></p>

<script>
var x = 123;

document.getElementById("demo").innerHTML = 
  x.valueOf() + "<br>" +
  (123).valueOf() + "<br>" +
  (100 + 23).valueOf();
</script>

</body>
</html>



 <html>
<body>

<h2>JavaScript Global Methods</h2>

<p>The Number() method converts variables to numbers:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");
</script>

</body>
</html>


 html>
<body>

<h2>JavaScript Global Methods</h2>

<p>The Number() method can convert a date to a number:</p>

<p id="demo"></p>

<script>
var x = new Date("2017-09-30");
document.getElementById("demo").innerHTML = Number(x); 
</script>

</body>
</html>


 <html>
<body>

<h2>JavaScript Global Functions</h2>

<p>The global JavaScript function parseInt() converts strings to numbers:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10");  
</script>

</body>
</html>______________



 <html>
<body>

<h2>JavaScript Global Methods</h2>

<p>The parseFloat() method converts strings to numbers:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
  parseFloat("10") + "<br>" +
  parseFloat("10.33") + "<br>" +
  parseFloat("10 6") + "<br>" +  
  parseFloat("10 years") + "<br>" +
  parseFloat("years 10");    
</script>

</body>
</html>


 <html>
<body>

<h2>JavaScript Arrays</h2>

<p>Avoid using new Array(). Use [] instead.</p>

<p id="demo"></p>

<script>
//var points = new Array(40, 100, 1, 5, 25, 10);
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points[0];  
</script>

</body>
</html>
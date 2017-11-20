/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

/*Función de lista desplegable*/
var btn = document.getElementById('btn1');
var cont = document.getElementById('uno');
btn.addEventListener('click', function(){
	var selection = document.getElementById('select').value;
	if (selection == '0') {
		alert('Elige una generación');
		return false;
	} cont.innerHTML = '<p> counter </p>';
	
});

/*Extracción dato de alumnas activas en Arequipa generación 2 del 2016*/
var students = data.SCL['2016-2'].students;
for (var i = 0; i < students.length; i++) {
	var counter = 0;
	counter = counter + i;
	}
console.log(counter);

	


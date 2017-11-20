/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

/*Función de lista desplegable*/
var btn = document.getElementById('btn1');
var cont = 0;
btn.addEventListener('click', function(){
	var selection = document.getElementById('select').value;
	if (selection == '0') {
		alert('Elige una generación');
		return false;
	} 
	var estudiantes = data.SCL['2016-2'].students;
    var inscritas = 0;
    var activas = 0;
    var bajas = 0;

for (var i = 0; i < estudiantes.length; i++) {
	inscritas++;
	if (estudiantes[i].active == true) {
		activas++;
	} else if (estudiantes[i].active == false){
		bajas++;
	}	
}


var porcentaje = parseInt((bajas * 100) / inscritas);
console.log(porcentaje);

/*Mostrando en HTML cantidad de alumnas total, activas e inactivas*/
var parrafoBajas = document.getElementById('dos');
dos.innerHTML = porcentaje;

var parrafoActivas = document.getElementById('uno');
uno.innerHTML = activas;

	
});

/*var students = data.SCL['2016-2'].students;
for (var i = 0; i < students.length; i++) {
	var counter = 0;
	counter = counter + i;
	}
console.log(counter);

/*sacando datos de alumnas total, activas e inactivas*/




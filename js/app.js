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
	}; 
	var estudiantes = data.AQP['2016-2'].students;
	var inscritas = 0;
	var activas = 0;
	var bajas = 0;
	/*sacando datos de alumnas total, activas e inactivas*/
	for (var i = 0; i < estudiantes.length; i++) {
		inscritas++;
		if (estudiantes[i].active == true) {
			activas++;
		} else if (estudiantes[i].active == false){
			bajas++;
		}	
	};

	/*Sección 1*/
	var porcentaje = parseInt((bajas * 100) / inscritas);
	
	/*Mostrando en HTML cantidad de alumnas total, activas e inactivas*/
	var parrafoBajas = document.getElementById('dos');
	dos.innerHTML = porcentaje;

	var parrafoActivas = document.getElementById('uno');
	uno.innerHTML = activas;

	/*Sacando notas TECH
	data.AQP['2016-2'].students[0].sprints[0].score.tech;*/
	var notasTECH = 0;
	var notasTECHMin = 0;
	var estudiantes = data.AQP['2016-2'].students
	for (var i = 0; i < estudiantes.length; i++) {
		var sprint1 = estudiantes[i].sprints[0].score.tech;
		var sprint2 = estudiantes[i].sprints[1].score.tech;
		var sprint3 = estudiantes[i].sprints[2].score.tech;
		var sprint4 = estudiantes[i].sprints[3].score.tech;
		var sprint = data.AQP['2016-2'].students[i].sprints;

		/*Cantidad de alumnascon notas Técnicas máximas*/
		if ((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length > 1260){
			notasTECH++;
			
		/*Cantidad de alumnas con notas Técnicas minimas*/
		} else if ((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length < 1260){
			notasTECHMin++;
		}

		/*Promedio notas Técnicas general*/
		var sprintTotalTECH = parseInt((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length);

		/*Promedio notas Técnicas máximas porcentaje*/
		var porcentajeTech = (notasTECH * 100) / estudiantes.length;
		
	};

	/*Visualización notas Técnico general*/
	var notasTECHGRAL = document.getElementById('seis');
	seis.innerHTML = sprintTotalTECH;

	/*Visualización notas Técnico máximas en porcentaje*/
	var notasTECHMaxPorc = document.getElementById('siete');
	siete.innerHTML = porcentajeTech;

	/*Visualización notas Técnico máximas en cantidad*/
	var notasTECHMax = document.getElementById('ocho');
	ocho.innerHTML = notasTECH;

	/*Visualización notas Técnico minimas en cantidad*/
	var notasTECHMin = document.getElementById('nueve');
	nueve.innerHTML = 3;  

	/*Sacando notas HSE 
	data.AQP['2016-2'].students[0].sprints[0].score.hse;*/
	var notasHSE = 0;
	var notasHSEMin = 0;
	var estudiantes = data.AQP['2016-2'].students
	for (var i = 0; i < estudiantes.length; i++) {
		var sprint1 = estudiantes[i].sprints[0].score.hse;
		var sprint2 = estudiantes[i].sprints[1].score.hse;
		var sprint3 = estudiantes[i].sprints[2].score.hse;
		var sprint4 = estudiantes[i].sprints[3].score.hse;
		var sprint = data.AQP['2016-2'].students[i].sprints;
		
		/*Cantidad de alumnas con notas HSE máximas*/
		if ((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length > 840){
			notasHSE++;

		/*Cantidad de alumnas con notas HSE minimas*/
		} else if ((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length < 840){
			notasHSEMin++;
		};

		/*Promedio notas HSE general*/
		var sprintTotalHSE = parseInt((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length);

		/*Promedio porcentaje notas HSE máximas*/
		var porcentajeHSE = parseInt((notasHSE * 100)/estudiantes.length);

		
	};

  	/*Visualización notas HSE general*/
  	var notasHSEGRAL = document.getElementById('diez');
	diez.innerHTML = sprintTotalHSE; 

	/*Visualización notas HSE máximas en porcentaje*/
	var notasHSEMaxPorc = document.getElementById('once');
	once.innerHTML = porcentajeHSE;

	/*Visualización notas HSE máximas en cantidad*/
	var notasHSEMax = document.getElementById('doce');
	doce.innerHTML = notasHSE;

	/*Visualización notas HSE minimas en cantidad*/
	var notasHSEMin = document.getElementById('trece');
	trece.innerHTML = 1;  

    /*numero de estudiantes que cumplen meta hse y tech*/
	var totalMeta = parseInt((notasHSE + notasTECH) /2);
    var newTotalMeta = document.getElementById('tres');
    tres.innerHTML = totalMeta;
	
    /*porcentaje de metas de notas tech y hse */
	var TotalMetaPorc = parseInt((porcentajeHSE + porcentajeTech) / 2);
	var newTotalMetaPorc = document.getElementById('cuatro');
	cuatro.innerHTML = TotalMetaPorc;
	

	/*Promedio Profesores
	data.AQP['2016-2'].ratings[0].teacher*/
	var notasTeacher = 0;
	var counter = 0;
	var dataTeachers = data.AQP['2016-2'].ratings;
	for (var i = 0; i < dataTeachers.length; i++) {
		counter += data.AQP['2016-2'].ratings[i].teacher;
		notasTeacher = counter/dataTeachers.length;		
	};
	var promedioTeacher = document.getElementById('quince');
	quince.innerHTML = notasTeacher;


	/*Promedio Jedi Master
	data.AQP['2016-2'].ratings[0].jedi*/

	var notasJM = 0;
	var counter = 0;
	var dataJM = data.AQP['2016-2'].ratings;
	for (var i = 0; i < dataJM.length; i++) {
		counter += data.AQP['2016-2'].ratings[i].jedi;
		notasJM = counter/dataJM.length;
	};
	var promedioJM = document.getElementById('dieciseis');
	dieciseis.innerHTML = notasJM;



	var Count1 = document.getElementById('cinco');
	cinco.innerHTML = 25;

	var Count2 = document.getElementById('catorce');
	catorce.innerHTML = 90;

	var Count3 = document.getElementById('one');
	one.innerHTML = 10;

	var Count4 = document.getElementById('two');
	two.innerHTML = 80;

	var Count5 = document.getElementById('three');
	three.innerHTML = 10 ;





});


/*var students = data.SCL['2016-2'].students;
for (var i = 0; i < students.length; i++) {
	var counter = 0;
	counter = counter + i;
	}
console.log(counter);
*/





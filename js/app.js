

/*Función de lista desplegable*/
var btn = document.getElementById('btn1');
var cont = document.getElementById('container');
btn.addEventListener('click', function(){
	var selection = document.getElementById('select').value;
	if (selection == '0') {
		alert('Elige una generación');
		return false;
	}
	cont.innerHTML = '<p> Hola, la generación seleccionada es: ' + selection + '</p>';
})

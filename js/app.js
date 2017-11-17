/*Función de lista desplegable*/
var btn = document.getElementById('btn');
var cont = document.getElementById('container');
btn.addEventListener('click', function(){
	var selection = document.getElementById('select').value;
	if (selection == '0') {
		alert('Elige una generación');
		return false;
	}
	cont.innerHTML = '<p> Hola, el jugo seleccionado fue: ' + selection + '</p>';
})

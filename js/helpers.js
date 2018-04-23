//function getRandomNumber (size)

// Nuevas versiones de Javascript:
// return Math.random() * size
// Math es una biblioteca de JS donde obtenemos funciones matemáticas.

/* (1)Random genera un número aleatório del 0 al 1. 
   * size para generar un número del 0 al que escriba.*/
// Se usa Math.floor para obtener números enteros.

/* (2)Cuando se genere el punto aleatório donde esté el tesoro, 
   habrá que medir la distancia entre el click y el tesoro
   generando una función. Esta función va a tomar 2 parámetros
   (los 2 puntos).
   - diff son las longitudes de los ejes.
   - return aplica el teotema de Pitágoras
   */

//1 Generate a random Number
let getRandomNumber = size => {
	return Math.floor(Math.random() * size);
}

//2 Get the Distance of two points
let getDistance = (e, target) => {
	let diffX = e.offsetX - target.x;
	let diffY = e.offsetY - target.y;
	return Math.sqrt ((diffX * diffX) + (diffY * diffY));
}

//3 Return a String depending on the distances
let getDistanceHint = distance => {
	if (distance < 30) {
		return "Boiling hot!";
	} else if (distance < 50) {
		return "Really hot";
	} else if (distance < 100) {
		return "Hot";
	} else if (distance < 150) {
		return "Warm";
	} else if (distance < 200) {
		return "Cold";
	} else if (distance < 250) {
		return "Really cold";
	} else {
		return "Freezing!";
	}
}
const WIDTH = 400;
const HEIGH = 400;

//Generar número aleatório
let target = {
	x: getRandomNumber(WIDTH),
	y: getRandomNumber(HEIGH)
};

/*Se obtiene referencia del mapa con getElement,
 y se guarda en variable $map.*/
let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
	console.log('click');
	clicks++;
	let distance = getDistance(e, target);
	let distanceHint = getDistanceHint(distance);
	$distance.innerHTML = `<h1>${distanceHint}</h1>`;

	if (distance < 20) {
		alert (`Found the Treasure in ${clicks} clicks!`);
		location.reload();
	}
});
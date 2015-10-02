/**
 * Created by Dzmitry_Siver on 9/22/2015.
 */

(function () {

	var ROWS = 4,
		COLS = 4;

	function initArray(numbers) {
		shuffle(numbers);
		var arr = new Array(ROWS);

		for (var i = 0; i < 4; i++) {
			arr[i] = new Array(COLS);
			for (var j = 0; j < 4; j++) {
				arr[i][j] = numbers.pop() || 0;
			}
		}
		console.log(arr);
	}

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;

		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	function createNumbers() {
		var numbers = [];
		for (var i = 0; i < ROWS*COLS - 1; i++) {
			numbers.push(i+1);
		}
		initArray(numbers);

		//var tile = document.createElement('div');
		//		tile.innerHTML = i + 1;
		//		tile.className = "tile tile_" + i;
		//		coords = getCoords(getRandomId());
		//		setPosition(tile, coords);
		//		game.appendChild(tile);
	}

	createNumbers();


})();
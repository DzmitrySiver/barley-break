/**
 * Created by Dzmitry_Siver on 9/22/2015.
 */

(function () {

	function getCoords(id) {
		var coords = {};
		coords.x = id % 4;
		coords.y = parseInt(id / 4);
		return coords;
	}

	function setPosition(element, coords) {

		element.style.left = coords.x * TILE_SIZE + "px";
		element.style.top = coords.y * TILE_SIZE + "px";
	}

	function getPosition(element) {
		var coords = {};
		coords.x = parseInt(element.style.left);
		coords.y = parseInt(element.style.top);
		return coords;
	}

	function getEmptyCoords() {
		var coords = {};
		coords.x = parseInt(empty.style.left);
		coords.y = parseInt(empty.style.top);
		return coords;
	}

	function isMovable(coords, emptyCoords) {
		if (( Math.abs(coords.x - emptyCoords.x) == 100 && Math.abs(coords.y - emptyCoords.y) == 0 ) ||
			( Math.abs(coords.x - emptyCoords.x) == 0 && Math.abs(coords.y - emptyCoords.y) == 100 )) {
			return true;
		}
		return false;
	}

	function moveTile(element) {
		var coords = getPosition(element);
		var emptyCoords = getEmptyCoords();
		var temp;
		if (isMovable(coords, emptyCoords)) {
			temp = coords;
			element.style.top = emptyCoords.y + "px";
			element.style.left = emptyCoords.x + "px";
			empty.style.top = temp.y + "px";
			empty.style.left = temp.x + "px";
		}
	}

	function init() {
		var tile;
		var coords;

		for (var i = 0; i < 15; i++) {
			tile = document.createElement('div');
			tile.innerHTML = i;
			tile.className = "tile tile_" + i;
			coords = getCoords(i);
			setPosition(tile, coords);
			game.appendChild(tile);
		}

		tile = document.createElement('div');
		tile.className = "empty";
		tile.id = "empty";
		coords = getCoords(15);
		setPosition(tile, coords);
		game.appendChild(tile);

		game.addEventListener("click", function () {
			var target = event.target;
			if (target.className.indexOf('tile') > -1) {
				moveTile(target);
			}
		})
	}

	var game = document.getElementById("gameWrapper"),
		TILE_SIZE = 100;

	init();

})();
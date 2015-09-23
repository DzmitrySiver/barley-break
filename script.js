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
		var position = {};
		position.x = parseInt(element.style.left);
		position.y = parseInt(element.style.top);
		return position;
	}

	function getEmptyPosition() {
		var position = {};
		position.x = parseInt(empty.style.left);
		position.y = parseInt(empty.style.top);
		return position;
	}

	function isMovable(position, emptyPosition) {
		if (( Math.abs(position.x - emptyPosition.x) == TILE_SIZE && Math.abs(position.y - emptyPosition.y) == 0 ) ||
			( Math.abs(position.x - emptyPosition.x) == 0 && Math.abs(position.y - emptyPosition.y) == TILE_SIZE )) {
			return true;
		}
	}

	function moveTile(element) {
		var position = getPosition(element);
		var emptyPosition = getEmptyPosition();
		var temp;
		if (isMovable(position, emptyPosition)) {
			temp = position;
			element.style.top = emptyPosition.y + "px";
			element.style.left = emptyPosition.x + "px";
			empty.style.top = temp.y + "px";
			empty.style.left = temp.x + "px";
		}
	}

	function getRandomId() {
		var rand = Math.floor(Math.random() * availableIds.length);
		return availableIds.splice(rand, 1);
	}

	function init() {
		var tile;
		var coords;
		for (var i = 0; i < 15; i++) {
			availableIds.push(i);
		}
		for (i = 0; i < 15; i++) {
			tile = document.createElement('div');
			tile.innerHTML = i + 1;
			tile.className = "tile tile_" + i;
			coords = getCoords(getRandomId());
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
		availableIds = [];
		TILE_SIZE = 100;

	init();

})();
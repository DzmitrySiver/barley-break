/**
 * Created by Dzmitry_Siver on 9/22/2015.
 */

(function () {
	console.log("lol");

	function getCoords(id) {
		var coords = {};
		coords.x = id % 4;
		coords.y = parseInt(id / 4);
		return coords;
	}

	function setPosition(element, coords) {
		var TILE_SIZE = 100;
		element.style.left = coords.x * TILE_SIZE + "px";
		element.style.top = coords.y * TILE_SIZE + "px";
	}

	for (var i = 0; i < 15; i++) {
		var tile = document.createElement('div');

		tile.innerHTML = i;
		tile.className = "tile tile_" + i;

		var coords = getCoords(i);

		setPosition(tile, coords);

		gameWrapper.appendChild(tile);
	}


})();
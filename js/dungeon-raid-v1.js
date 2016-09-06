/**
 * Created by Dzmitry_Siver on 9/5/2016.
 */

function DungeonRaidGame(options) {

	this.options = {
		activeTiles: 0,
		dragActive: false,
		activeType: '',
		tilesClassList: [
			'sword',
			'enemy',
			'potion'
		]
	};

	this.events = function () {

		var self = this,
			opts = self.options;

		game.addEventListener('mousedown', function (e) {
			var target = e.target;

			if (Array.prototype.indexOf.call(target.classList, 'tile') !== -1) {
				target.classList.add('active');
				opts.dragActive = true;
				opts.activeTiles++;
				opts.activeType = target.getAttribute('type');
			}
		}, false);

		game.addEventListener('mouseup', function (e) {
			opts.dragActive = false;
			self.resetActiveTiles();
		}, false);

		game.addEventListener('mouseover', function (e) {
			var target = e.target;

			if (opts.dragActive) {
				if (Array.prototype.indexOf.call(target.classList, 'tile') !== -1) {
					if (target.getAttribute('type') === opts.activeType) {
						target.classList.add('active');
						opts.activeTiles++;
					}
				}
			}
		}, false);

	};

	this.resetActiveTiles = function () {
		var self = this,
			opts = self.options,
			activeTiles,
			i,
			iLen;

		opts.activeTiles = 0;
		activeTiles = game.querySelectorAll('.active');
		iLen = activeTiles.length;

		for (i = 0; i < iLen; i++) {
			activeTiles[i].classList.remove('active')
		}
	};

	this.createTiles = function () {
		var row,
			col,
			tile,
			opts = this.options,
			tileType;

		for (row = 0; row < ROWS_COUNT; row++) {
			for (col = 0; col < COLS_COUNT; col++) {
				tileType = opts.tilesClassList[Math.floor(Math.random() * opts.tilesClassList.length)];
				tile = document.createElement('div');
				tile.className = 'tile ' + tileType;
				tile.setAttribute('type', tileType);
				tile.style.width = TILE_SIZE - 20 + 'px';
				tile.style.height = TILE_SIZE - 20 + 'px';
				tile.style.lineHeight = TILE_SIZE - 30 + 'px';
				tile.innerHTML = tileType;

				this.setTilePosition(tile, row, col);

				game.appendChild(tile);
			}
		}
	};

	this.setTilePosition = function (element, row, col) {
		element.style.top = row * TILE_SIZE + 10 + 'px';
		element.style.left = col * TILE_SIZE + 10 + 'px';
	};

	this.init = function () {
		game.style.width = TILE_SIZE * COLS_COUNT + 'px';
		game.style.height = TILE_SIZE * ROWS_COUNT + 'px';

		this.createTiles();
		this.events();
	};

	var game = document.getElementById('gameWrapper'),

	// ============= GAME SETTINGS =============
		ROWS_COUNT = 3,
		COLS_COUNT = 3,
		TILE_SIZE = 100;
	// ============= GAME SETTINGS =============

	this.init();

}
(function (root) {
    var EMPTY = root.maze.EMPTY;
    var WALL = root.maze.WALL;
    var PATH = root.maze.PATH;
    var CURRENT = root.maze.CURRENT;

    /**
     * Функция находит путь к выходу и возвращает найденный маршрут
     *
     * @param {number[][]} maze карта лабиринта представленная двумерной матрицей чисел
     * @param {number} x координата точки старта по оси X
     * @param {number} y координата точки старта по оси Y
     * @returns {[number, number][]} маршрут к выходу представленный списоком пар координат
     */

    var position = {};
    var map;
    var path = [];

    var directions = {
        top: {},
        bot: {},
        left: {},
        right: {}
    };

    function checkWays(x, y) {

        var availableWays = [];
        var direction;

        directions.top.x = x;
        directions.top.y = y - 1;

        directions.bot.x = x;
        directions.bot.y = y + 1;

        directions.left.x = x - 1;
        directions.left.y = y;

        directions.right.x = x + 1;
        directions.right.y = y;

        for (direction in directions) {
            if (!directions.hasOwnProperty(direction)) continue;

            direction = directions[direction];

            if (map[direction.x][direction.y] == 0) {
                availableWays.push([direction.x, direction.y]);
            }
        }

        return availableWays
    }

    function move(x, y) {
        path.push(position.x, position.y);

    }

    function pathFinder(x, y) {
        position.x = x;
        position.y = y;

        var ways = checkWays(x,y),
            waysLength = ways.length;

        if (waysLength < 1) {

            // dead end :(

        } else if (waysLength == 1) {

            // move the only way
            move(ways[0], ways[1]);

        } else {

            // create a checkpoint

        }

        return path;
    }

    function solution(maze, x, y) {

        map = maze;

        return pathFinder(x, y);
    }

    root.maze.solution = solution;
})(this);

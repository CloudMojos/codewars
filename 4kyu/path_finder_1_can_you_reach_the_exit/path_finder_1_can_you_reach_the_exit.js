function solution(arg) {
    // Convert maze from string to double array
    let maze = arg.split('\n');
    maze = maze.map((row) => {
        return row.split('');
    });
    maze.forEach((row) => {
        console.log(row);
    });

    // Run a recursive function to visit each path para
    // di na mag backtrack pag dead end isa

    return traverse([0, 0], maze, [maze.length - 1, maze[0].length - 1]);
}

function traverse(current, maze, destination) {
    if (current[0] === destination[0] && current[1] === destination[1]) {
        return true;
    }
    const [x, y] = current;
    if (
        x < 0 ||
        y < 0 ||
        x >= maze.length ||
        y >= maze[0].length ||
        maze[x][y] === 'W'
    ) {
        return false;
    }

    if (maze[x][y] === 'V') {
        return false;
    }

    maze[x][y] = 'V';

    const directions = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
    ];

    for (const [nextX, nextY] of directions) {
        if (traverse([nextX, nextY], maze, destination)) {
            return true;
        }
    }

    return false;
}

const arg = `.W.
.W.
W..`;
const x = solution(arg);
console.log(x);

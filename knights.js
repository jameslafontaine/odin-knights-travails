const BOARD_SIZE = 8;

const adjList = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));

// Build the adjacency list for the Knight's moves on a chess board
for (let x = 0; x < BOARD_SIZE; x++) {
    for (let y = 0; y < BOARD_SIZE; y++) {
        const moves = [];

        // All 8 possible knight moves
        const deltas = [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1],
        ];

        for (const [dx, dy] of deltas) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < BOARD_SIZE && ny >= 0 && ny < BOARD_SIZE) {
                moves.push([nx, ny]);
            }
        }

        adjList[x][y] = moves;
    }
}

/* Shows the shortest possible path to get from the start square to the end square by outputting all squares the
knight will stop on along the way */
function knightMoves(startSquare, endSquare) {
    const queue = [[startSquare, [startSquare]]];
    const visited = Array(8)
        .fill(null)
        .map(() => Array(8).fill(false));
    visited[startSquare[0]][startSquare[1]] = true;

    while (queue.length > 0) {
        const [[x, y], path] = queue.shift();

        // visit the next square in the queue
        if (squaresEqual([x, y], endSquare)) {
            // we have found the target square, lets display the results and return the path
            console.log(`=> You made it in ${path.length - 1} move(s)! Here's your path:`);
            path.forEach((move) => console.log(move));
            return path;
        }

        // enqueue the valid knight moves that we haven't already visited + the current path up to this point
        for (const [nx, ny] of adjList[x][y]) {
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([
                    [nx, ny],
                    [...path, [nx, ny]],
                ]);
            }
        }
    }
}

function squaresEqual(a, b) {
    return a[0] == b[0] && a[1] == b[1];
}

/* Some tests */
knightMoves([0, 0], [1, 2]);
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);

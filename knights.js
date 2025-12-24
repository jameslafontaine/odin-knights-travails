const files = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
};

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

/**
 *
 *
 * Shows the shortest possible path to get from the start square to the end square by outputting all squares the
 * knight will stop on along the way .
 *
 * Accepts squares in algebraic notation (e.g., "e4") or coordinates ([4, 3])
 */
function knightMoves(startSquare, endSquare) {
    // Check if we need to convert startSquare and endSquare to coordinate form
    // Remember original input type
    const outputAlgebraic = typeof startSquare === "string";

    if (typeof startSquare === "string") startSquare = convertToCoords(startSquare);

    if (typeof endSquare === "string") endSquare = convertToCoords(endSquare);

    if (!areValidCoords(startSquare) || !areValidCoords(endSquare)) {
        throw new RangeError("Coordinates need to be between 0-7 inclusive");
    }

    const queue = [[startSquare, [startSquare]]];
    const visited = Array(8)
        .fill(null)
        .map(() => Array(8).fill(false));
    visited[startSquare[0]][startSquare[1]] = true;

    while (queue.length > 0) {
        const [[x, y], path] = queue.shift();

        // Visit the next square in the queue
        if (squaresEqual([x, y], endSquare)) {
            // We have found the target square, lets display the results and return the path
            console.log(`=> You made it in ${path.length - 1} move(s)! Here's your path:`);
            path.forEach((move) => {
                console.log(outputAlgebraic ? convertToNotation(move) : move);
            });
            console.log(); // Add an empty line at the end of output
            return path;
        }

        // Enqueue the valid knight moves that we haven't already visited + the current path up to this point
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

/**
 * Converts algebraic notation (e.g., "e4") to coordinates [4, 3]
 */
function convertToCoords(notation) {
    if (typeof notation !== "string" || notation.length !== 2) {
        throw new TypeError("Square must be a 2-character string like 'e4'");
    }

    const file = notation[0].toLowerCase(); // ← Handle "E4" or "e4"
    const rank = Number(notation[1]);

    if (!(file in files)) {
        throw new RangeError("File must be a-h");
    }

    if (!Number.isInteger(rank) || rank < 1 || rank > 8) {
        throw new RangeError("Rank must be 1-8");
    }

    return [files[file], rank - 1];
}

/**
 * Converts coordinates [4, 3] to algebraic notation (e.g., "e4")
 */
function convertToNotation(coords) {
    if (!areValidCoords(coords)) {
        throw new RangeError("Invalid coordinates");
    }

    const file = String.fromCharCode(97 + coords[0]);
    const rank = coords[1] + 1;

    return file + rank;
}

function areValidCoords(square) {
    return (
        Array.isArray(square) &&
        square.length === 2 &&
        square.every((coord) => Number.isInteger(coord) && coord >= 0 && coord < BOARD_SIZE)
    );
}

function squaresEqual(a, b) {
    return a[0] == b[0] && a[1] == b[1];
}

/* Some tests */
knightMoves([0, 0], [7, 7]);
knightMoves("a1", "h8");
knightMoves([0, 0], [1, 2]);
knightMoves("a1", "b2");
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);

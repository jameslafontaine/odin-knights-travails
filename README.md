# Odin Knight’s Travails

A JavaScript project built as part of **The Odin Project** curriculum to practice **graph traversal**, **breadth-first search (BFS)**, and **pathfinding algorithms**.  
The project models a chessboard as a graph and computes the **shortest path a knight can take** between two squares.

---

## Project Description

This project involves implementing a solution to the classic **Knight’s Travails** problem:

> Given a starting square and a target square on a standard 8×8 chessboard, determine the shortest sequence of moves a knight can take to reach the target.

The solution uses **breadth-first search (BFS)** to guarantee the shortest path, reinforcing key concepts in graph theory and traversal algorithms.

---

## Features

-   Models a chessboard as a graph
-   Generates all valid knight moves from a given position
-   Uses breadth-first search to find the shortest path
-   Outputs the path length and exact sequence of moves
-   Clean, readable implementation focused on clarity
-   Supports both algebraic notation (e.g. "e4") and coordinates [4, 3] for input and output

---

## Key Concepts Practiced

-   Graph representation of a grid-based problem
-   Breadth-first search (BFS)
-   Shortest path guarantees in unweighted graphs
-   Queue-based traversal
-   Coordinate-based movement logic
-   Avoiding revisiting previously explored nodes

---

## Example Output

```js
knightMoves([0, 0], [7, 7]);
knightMoves("a1", "h8");
```

```console
=> You made it in 6 move(s)! Here's your path:
[ 0, 0 ]
[ 1, 2 ]
[ 0, 4 ]
[ 1, 6 ]
[ 3, 5 ]
[ 5, 6 ]
[ 7, 7 ]

=> You made it in 6 move(s)! Here's your path:
a1
b3
a5
b7
d6
f7
h8

```

---

## Learning Objectives

This project was built to develop practical experience with:

-   Thinking in terms of graphs rather than grids
-   Implementing breadth-first search (BFS) for shortest-path problems
-   Breaking down complex movement rules into simple logic
-   Writing clear and predictable traversal algorithms
-   Reasoning about algorithm correctness and efficiency

---

## Possible Extensions

-   Visualize the knight’s path on a chessboard UI
-   Support variable board sizes
-   Compare BFS with depth-first search (DFS)
-   Add animation to demonstrate traversal
-   Add unit tests for pathfinding logic

---

## License

This project is for educational purposes and follows The Odin Project curriculum guidelines.
Feel free to fork, modify, and explore.

import maze_solver from "@code/MazeSolver";

test("maze solver", function () {
    const maze = [
        "xxxxxxxxxx x",
        "x        x x",
        "x        x x",
        "x xxxxxxxx x",
        "x          x",
        "x xxxxxxxxxx",
    ];

    const maze2 = [
        "qqqqq qqqqqqqqq",
        "q   q q       q",
        "q   q q qqqqq q",
        "q   q q q     q",
        "q   q qqq q q q",
        "q         qqq q",
        "q   q qq  q   q",
        "qqqqqqqqqqq qqq",
    ];

    const mazeResult2 = [
        { x: 11, y: 7 },
        { x: 11, y: 6 },
        { x: 12, y: 6 },
        { x: 13, y: 6 },
        { x: 13, y: 5 },
        { x: 13, y: 4 },
        { x: 13, y: 3 },
        { x: 12, y: 3 },
        { x: 11, y: 3 },
        { x: 10, y: 3 },
        { x: 9, y: 3 },
        { x: 9, y: 4 },
        { x: 9, y: 5 },
        { x: 8, y: 5 },
        { x: 7, y: 5 },
        { x: 6, y: 5 },
        { x: 5, y: 5 },
        { x: 5, y: 4 },
        { x: 5, y: 3 },
        { x: 5, y: 2 },
        { x: 5, y: 1 },
        { x: 5, y: 0 },
    ];

    const mazeResult = [
        { x: 10, y: 0 },
        { x: 10, y: 1 },
        { x: 10, y: 2 },
        { x: 10, y: 3 },
        { x: 10, y: 4 },
        { x: 9, y: 4 },
        { x: 8, y: 4 },
        { x: 7, y: 4 },
        { x: 6, y: 4 },
        { x: 5, y: 4 },
        { x: 4, y: 4 },
        { x: 3, y: 4 },
        { x: 2, y: 4 },
        { x: 1, y: 4 },
        { x: 1, y: 5 },
    ];

    // there is only one path through
    const result = maze_solver(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });
    const result2 = maze_solver(maze2, "q", { x: 11, y: 7 }, { x: 5, y: 0 });

    expect(drawPath(maze, result)).toEqual(drawPath(maze, mazeResult));
    expect(drawPath(maze2, result2)).toEqual(drawPath(maze2, mazeResult2));
});

function drawPath(data: string[], path: Point[]) {
    const data2 = data.map((row) => row.split(""));
    path.forEach((p) => {
        if (data2[p.y] && data2[p.y][p.x]) {
            data2[p.y][p.x] = "*";
        }
    });
    console.log(data2.map((d) => d.join("")));
    return data2.map((d) => d.join(""));
}

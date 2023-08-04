const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function step(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    const invalidY = current.y < 0 || current.y >= maze.length;
    const invalidX = current.x < 0 || current.x > maze[0].length;

    const isEnd = current.y === end.y && current.x === end.x;

    if (invalidY || invalidX) {
        return false;
    }

    if (maze[current.y][current.x] === wall) {
        return false;
    }

    if (isEnd) {
        path.push(end);
        return true;
    }

    if (seen[current.y][current.x]) {
        return false;
    }

    path.push(current);
    seen[current.y][current.x] = true;

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            step(
                maze,
                wall,
                {
                    x: current.x + x,
                    y: current.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let seen = [];
    let path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    step(maze, wall, start, end, seen, path);

    return path;
}

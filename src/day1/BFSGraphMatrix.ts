import Queue from "./Queue";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    let path: number[] = [];
    let queue: Queue<number> = new Queue();
    let seen: boolean[] = new Array(graph.length).fill(false);
    let prev: number[] = new Array(graph.length).fill(-1);
    let curr = source;

    queue.enqueue(source);
    seen[source] = true;

    while (queue.length > 0) {
        curr = queue.deque() as number;

        if (curr === needle) {
            break;
        }

        for (let i = 0; i < graph.length; i++) {
            if (graph[curr][i] === 0 || seen[i]) {
                continue;
            }

            queue.enqueue(i);
            seen[i] = true;
            prev[i] = curr;
        }
    }

    if (curr !== needle) {
        return null;
    } else {
        path.push(curr);
        while (curr !== source) {
            path.unshift(prev[curr]);
            curr = prev[curr];
        }

        return path;
    }
}

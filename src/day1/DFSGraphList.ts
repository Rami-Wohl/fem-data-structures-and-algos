export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    let path: number[] = [];

    const foundNeedle = traverse(graph, source, needle, path, []);

    return foundNeedle ? path : null;
}

function traverse(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    path: number[],
    seen: number[],
): boolean {
    if (seen.includes(curr)) {
        return false;
    }
    if (curr === needle) {
        path.push(curr);
        return true;
    }

    seen.push(curr);
    path.push(curr);

    for (let i = 0; i < graph[curr].length; i++) {
        if (traverse(graph, graph[curr][i].to, needle, path, seen)) {
            return true;
        }
    }

    path.pop();

    return false;
}

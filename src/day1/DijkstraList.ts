function hasUnvisited(seen: boolean[], distances: number[]): boolean {
    let hasUnvisited = true;

    for (let i = 0; i < seen.length; i++) {
        //if there's a 'false' in the seen array then there is an unvisited vertex
        // but that vertex has to be smaller then Infinite
        // (otherwise there's no edge that leads to that vertex)
        if (!seen[i] && distances[i] < Infinity) {
            hasUnvisited = true;
        }
    }

    return hasUnvisited;
}

function getLowestUnvisited(seen: boolean[], distances: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (distances[i] < lowestDistance) {
            idx = i;
            lowestDistance = distances[i];
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    let seen: boolean[] = new Array(arr.length).fill(false);
    let prev: number[] = new Array(arr.length).fill(-1);
    let distances: number[] = new Array(arr.length).fill(Infinity);
    distances[source] = 0;

    while (hasUnvisited(seen, distances)) {
        let current = getLowestUnvisited(seen, distances);
        seen[current] = true;

        if (current === -1) {
            break;
        }

        for (let i = 0; i < arr[current].length; i++) {
            let edge = arr[current][i];
            if (seen[edge.to]) {
                continue;
            }

            if (distances[current] + edge.weight < distances[edge.to]) {
                distances[edge.to] = distances[current] + edge.weight;
                prev[edge.to] = current;
            }
        }
    }

    let shortestPath: number[] = [];
    let current = sink;

    while (prev[current] !== -1) {
        shortestPath.push(current);
        current = prev[current];
    }

    shortestPath.push(source);

    return shortestPath.reverse();
}

import dijkstra_list from "@code/DijkstraList";
import { list1 } from "./graph";

test("dijkstra via adj list", function () {
    /// waht?
    // what..
    // what...
    expect(dijkstra_list(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
    expect(dijkstra_list(7, 4, list1)).toEqual([7, 6, 5, 4]);
});

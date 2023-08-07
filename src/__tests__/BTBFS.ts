import bfs from "@code/BTBFS";
import { tree } from "./tree";

// search order should be: 20, 50, 10, 100, 30, 15, 5, 45, 29, 7

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});

import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: Queue<BinaryNode<number>> = new Queue();
    queue.enqueue(head);

    let foundNeedle = false;

    const path: number[] = [];

    while (queue.length > 0) {
        const curr = queue.deque() as BinaryNode<number>;

        path.push(curr.value);

        if (curr.value === needle) {
            foundNeedle = true;
            break;
        }
        if (curr.right) {
            queue.enqueue(curr.right);
        }

        if (curr.left) {
            queue.enqueue(curr.left);
        }
    }

    console.log(
        `${
            foundNeedle ? "found needle" : "did not find needle"
        }, search path: ${path}`,
    );

    return foundNeedle;
}

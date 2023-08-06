function recurse_children(node: BinaryNode<number>, values: number[]): void {
    if (node.left) {
        recurse_children(node.left, values);
    }
    if (node.right) {
        recurse_children(node.right, values);
    }
    values.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    let values: number[] = [];

    recurse_children(head, values);

    return values;
}

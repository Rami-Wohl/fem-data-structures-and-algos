function recurse_children(node: BinaryNode<number>, values: number[]): void {
    if (!node) {
        return;
    }

    if (node.left) {
        recurse_children(node.left, values);
    }
    values.push(node.value);
    if (node.right) {
        recurse_children(node.right, values);
    }
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    let values: number[] = [];

    recurse_children(head, values);

    return values;
}

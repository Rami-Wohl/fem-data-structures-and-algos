function recurse_children(node: BinaryNode<number>, values: number[]): void {
    values.push(node.value);
    if (node.left) {
        recurse_children(node.left, values);
    }
    if (node.right) {
        recurse_children(node.right, values);
    }
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    let values: number[] = [];

    recurse_children(head, values);

    return values;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    return path;
}

function walk(node: BinaryNode<number>, path: number[]) {
    if (node.left) walk(node.left, path);
    path.push(node.value);
    if (node.right) walk(node.right, path);
}

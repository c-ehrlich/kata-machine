export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    return path;
}

function walk(node: BinaryNode<number>, path: number[]) {
    path.push(node.value);
    if (node.left) walk(node.left, path);
    if (node.right) walk(node.right, path);
}

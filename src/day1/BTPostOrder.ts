/**
 * This is prime's version... mine is in InOrder/PreOrder
 */
export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    return walk(head, path);
}

function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) return path;

    walk(node.left, path);
    walk(node.right, path);
    path.push(node.value);

    return path;
}

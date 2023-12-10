// my version 2
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return find(head, needle);
}

function find(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) return false;
    if (needle === curr.value) return true;
    if (needle <= curr.value) return find(curr.left, needle);
    return find(curr.right, needle);
}

// my version 1
// export default function dfs(head: BinaryNode<number>, needle: number): boolean {
//     let node: BinaryNode<number> | null = head;
//     while (true) {
//         if (!node) return false;
//         if (node.value === needle) return true;
//         else if (needle <= node.value) node = node.left;
//         else node = node.right;
//     }
// }

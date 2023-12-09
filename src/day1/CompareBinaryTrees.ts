export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}

// // mine, dfs
// export default function compare(
//     a: BinaryNode<number> | null,
//     b: BinaryNode<number> | null,
// ): boolean {
//     function walk(a: BinaryNode<Number> | null, b: BinaryNode<number> | null) {
//         if (!a && !b) return true;
//         if (a?.value !== b?.value) return false;
//         if (!walk(a?.left ?? null, b?.left ?? null)) return false;
//         if (!walk(a?.right ?? null, b?.right ?? null)) return false;
//         return true;
//     }

//     return walk(a, b);
// }

// mine, bfs
// export default function compare(
//     a: BinaryNode<number> | null,
//     b: BinaryNode<number> | null,
// ): boolean {
//     const qa = [a];
//     const qb = [b];

//     while (qa.length || qb.length) {
//         const ca = qa.shift();
//         const cb = qb.shift();

//         if (ca && !cb) return false;
//         if (!ca && cb) return false;
//         if (!ca && !cb) continue;
//         if (!(ca?.value === cb?.value)) return false;

//         qa.push(ca?.left ?? null);
//         qb.push(cb?.left ?? null);

//         qa.push(ca?.right ?? null);
//         qb.push(cb?.right ?? null);
//     }

//     return true;
// }

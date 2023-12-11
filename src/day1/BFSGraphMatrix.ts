export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    // return the path that we took
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q = [source];

    do {
        const curr = q.shift()!;
        if (curr === needle) break;

        const adjs = graph[curr];
        for (let i = 0; i < graph.length; i++) {
            if (adjs[i] === 0) continue; // no edge
            if (seen[i]) continue; // been there

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);

    if (prev[needle] === -1) return null;

    // walk prevs until we get to a -1
    let curr = needle;
    const out = [curr];

    while (prev[curr] !== -1) {
        curr = prev[curr];
        out.push(curr);
    }

    return out.reverse();
}

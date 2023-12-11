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

    // walk prevs until we get to a -1
    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) return [source].concat(out.reverse());

    return null;
}

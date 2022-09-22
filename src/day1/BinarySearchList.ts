// export default function bs_list(haystack: number[], needle: number): boolean {

// }

export default function bs_list(haystack: number[], needle: number): boolean {
    const middle = Math.max(Math.floor(haystack.length / 2), 0);

    if (haystack[middle] === needle) {
        return true;
    }

    if (haystack.length <= 1) {
        return false;
    }

    if (haystack[middle] > needle) {
        return bs_list(haystack.slice(0, middle), needle);
    } else {
        return bs_list(haystack.slice(middle + 1), needle);
    }
}

function bs_list2(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m;
        }
    } while (lo < hi);

    return false;
}

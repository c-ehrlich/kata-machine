export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];
        if (v === needle) return true;
        if (v > needle) hi = m;
        if (v < needle) lo = m + 1;
    } while (lo < hi);

    return false;
}

// my version

// export default function bs_list(haystack: number[], needle: number): boolean {
//   return bsearch(haystack, needle, 0, haystack.length - 1) ?? false;
// }

// function bsearch(
//   haystack: number[],
//   needle: number,
//   lo: number,
//   hi: number,
// ): boolean {
//   const mid = Math.floor(lo + (hi - lo) / 2);
//   const val = haystack[mid];
//   if (val === needle) return true;
//   if (hi <= lo) return false;

//   if (needle > val) return bsearch(haystack, needle, mid + 1, hi);
//   if (needle < val) return bsearch(haystack, needle, lo, mid - 1);

//   return false;
// }

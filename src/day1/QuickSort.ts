export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

// primes solution
function qs2(arr: number[], lo: number, hi: number): void {
    // base case
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    // walk from the lo to the hi but not including the hi
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            ++idx;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // the part i didnt realist
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

// my solution after figuring out the sorting shit
function qs(arr: number[], lo: number, hi: number): void {
    // don't need to do anything if we're at 0 or 1 elements
    if (hi - lo <= 0) {
        return;
    }
    const pivot = arr[hi];
    let idx = lo - 1;
    // go through and sort this section
    for (let i = lo; i <= hi; i++) {
        if (arr[i] <= pivot) {
            ++idx;
            const swap = arr[i];
            arr[i] = arr[idx];
            arr[idx] = swap;
        }
    }
    // run again from lo to idx-1, and idx+1 to hi
    // idx = Math.max(idx, 0);
    qs(arr, lo, idx - 1);
    qs(arr, idx + 1, hi);
}

/**
 * Strategies
 * - Greedy (linear search)
 * - Divide and conquer (quick sort)
 * - Dynamic Programming (what is the best day to invest on a stock chart)
 */

// my working solution
// this is terrible because it creates new arrays all the time
// function sort(arr: number[]): number[] {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     // create pivot
//     const midpoint = Math.floor(arr.length / 2);
//     const pivot = arr[midpoint];

//     // create left and right arrays
//     const left = [] as number[];
//     const right = [] as number[];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === midpoint) {
//             continue;
//         }
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...sort(left), pivot, ...sort(right)];
// }

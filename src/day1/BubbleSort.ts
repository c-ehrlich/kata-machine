export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

// my version
// export default function bubble_sort(arr: number[]): void {
//     for (let max = arr.length - 1; max >= 1; max--) {
//         for (let i = 1; i <= max; i++) {
//             if (arr[i - 1] > arr[i]) {
//                 const temp = arr[i - 1];
//                 arr[i - 1] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
// }

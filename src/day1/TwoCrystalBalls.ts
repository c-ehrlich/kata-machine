export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (i; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

// my initial version
// issue:
// - might overshoot if all false
// export default function two_crystal_balls(breaks: boolean[]): number {
//     const l = breaks.length;
//     const jump = Math.floor(Math.sqrt(l));
//     let i = 0;
//     let startLinear = false;

//     do {
//         i += jump;
//         if (breaks[i] === true || i > l) {
//             startLinear = true;
//             i -= jump;
//         }
//     } while (startLinear === false);

//     for (let j = i; j < i + jump; j++) {
//         if (breaks[j] === true) {
//             return j;
//         }
//     }

//     return -1;
// }

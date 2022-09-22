export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i <= breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    // now we need to search between i+1 and i+jumpAmount
    for (let j = i + 1; j < i + jumpAmount; j++) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}

function two_crystal_balls_try1(breaks: boolean[]): number {
    // this solution is wrong! we always want to jump by the sqrt
    // of the total length, not by some newly calculated thing

    let lo = 0;
    const hi = breaks.length - 1;
    let t = 0;

    do {
        t = lo + Math.floor(Math.sqrt(hi - lo));
        if (!breaks[t]) {
            if (t === hi) return -1;
            lo = t;
        }
    } while (!breaks[t]);

    for (let i = lo; i < hi; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

function two_crystal_balls_prime(breaks: boolean[]) {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

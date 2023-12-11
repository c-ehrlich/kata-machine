export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        ++this.length;
    }

    // also called `poll` or `pop` sometimes
    delete(): number {
        if (this.length === 0) return -1;

        const out = this.data[0];

        --this.length;
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        // get parent, check if we're large
        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const value = this.data[idx];

        if (parentValue > value) {
            this.data[parentIdx] = value;
            this.data[idx] = parentValue;

            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void {
        // remove head, put last element in there, heapify down

        if (idx >= this.length) return;

        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (lIdx >= this.length) return;

        const lVal = this.data[lIdx];
        const rVal = this.data[rIdx];
        const val = this.data[idx];

        if (lVal > rVal && val > rVal) {
            this.data[idx] = rVal;
            this.data[rIdx] = val;

            this.heapifyDown(rIdx);
        } else if (rVal > lVal && val > lVal) {
            this.data[idx] = lVal;
            this.data[lIdx] = val;

            this.heapifyDown(lIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }
    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}

export default class ArrayList<T> {
    public length: number;
    private capacityIncrement: number;
    private capacity: number;
    private array: (T | undefined)[];

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.capacityIncrement = capacity;
        this.array = Array(this.capacityIncrement).fill(undefined);
    }

    private increaseCapacity() {
        this.array = this.array.concat(
            Array(this.capacityIncrement).fill(undefined),
        );
        this.capacity += this.capacityIncrement;
    }

    prepend(item: T): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }
        for (let i = this.length; i > 0; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }
        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }
        this.array[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        // check whether or not the item exists in the array-list
        let idx = -1;
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === item) {
                idx = i;
                break;
            }
        }
        if (idx === -1) {
            return undefined;
        }

        // delete the item
        const returnItem = this.array[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;
        return returnItem;
    }

    get(idx: number): T | undefined {
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        // delete the item
        const returnItem = this.array[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;
        return returnItem;
    }
}

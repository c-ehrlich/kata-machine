type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

type QueueItem<T> = {
    item: T;
    prev: QueueItem<T> | undefined;
};

class MyQueue<T> {
    public length: number;
    public head: QueueItem<T> | undefined;
    public tail: QueueItem<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const queueItem: QueueItem<T> = {
            item,
            prev: undefined,
        };

        if (this.tail) {
            this.tail.prev = queueItem;
        }

        this.tail = queueItem;

        if (!this.head) {
            this.head = queueItem;
        }

        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const nodeToReturn = this.head;
        this.head = this.head.prev;
        this.length--;
        return nodeToReturn.item;
    }

    // what's the first element?
    peek(): T | undefined {
        return this.head?.item;
    }
}

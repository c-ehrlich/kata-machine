type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: Node<T> = { value: item };
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

        const oldHead = this.head;
        this.head = oldHead.next;

        // free etc in non gc language
        oldHead.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return oldHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

// my solution
// export default class Queue<T> {
//     public length: number;
//     public head: Node<T> | undefined;
//     public tail: Node<T> | undefined;

//     constructor() {
//         this.length = 0;
//         this.head = undefined;
//         this.tail = undefined;
//     }

//     enqueue(item: T): void {
//         const node: Node<T> = { item };
//         if (!this.head) {
//             this.head = node;
//         }

//         if (this.tail) {
//             this.tail.next = node;
//         }

//         this.tail = node;

//         this.length++;
//     }

//     deque(): T | undefined {
//         if (!this.head) {
//             return undefined;
//         }

//         const node = this.head;

//         if (this.head === this.tail) {
//             this.tail = undefined;
//         }

//         this.head = node.next;

//         this.length--;

//         delete node.next;
//         return node.item;
//     }

//     peek(): T | undefined {
//         return this.head?.item;
//     }
// }

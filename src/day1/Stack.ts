type Node<T> = {
    value: T;
    prev?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        this.head = head.prev;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

// my solution
// type Node<T> = {
//     item: T;
//     next?: Node<T>;
// };

// export default class Stack<T> {
//     public length: number;
//     private head?: Node<T>;

//     constructor() {
//         this.length = 0;
//         this.head = undefined;
//     }

//     push(item: T): void {
//         const node: Node<T> = { item, next: this.head };
//         this.head = node;
//         this.length++;
//     }

//     pop(): T | undefined {
//         if (!this.head) {
//             return undefined;
//         }

//         const node = this.head;
//         this.head = node.next;
//         node.next = undefined;

//         this.length--;

//         return node.item;
//     }

//     peek(): T | undefined {
//         return this.head?.item;
//     }
// }

// export default class DoublyLinkedList<T> {
//     private length: number;
//     private head?: Node<T>;

//     constructor() {
//         this.length = 0;
//         this.head = undefined;
//     }

//     prepend(item: T): void {
//         const node = { value: item } as Node<T>;
//         this.length++;
//         if (!this.head) {
//             this.head = node;
//             return;
//         }
//         node.next = this.head;
//         this.head.prev = node;
//         this.head = node;
//     }

//     insertAt(item: T, idx: number): void {
//         if (idx > this.length) {
//             throw new Error("Oh no");
//         }
//         this.length++;
//         if (idx === this.length) {
//             // we're just appending
//             this.append(item);
//             return;
//         } else if (idx === 0) {
//             // we're just prepending
//             this.prepend(item);
//             return;
//         }
//         // walk
//         let curr = this.head;
//         for (let i = 0; curr && i < idx; ++i) {
//             curr = curr.next;
//         }
//         curr = curr as Node<T>;
//         const node = { value: item } as Node<T>;
//         node.next = curr;
//         node.prev = curr.prev;
//         curr.prev = node;
//         if (curr.prev) {
//             curr.prev.next = curr;
//         }
//     }
//     append(item: T): void {}
//     remove(item: T): T | undefined {}
//     get(idx: number): T | undefined {}
//     removeAt(idx: number): T | undefined {}
// }

export default class DoublyLinkedList<T> {
    public length: number;
    private start: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.start = undefined;
    }

    printList() {
        let curr = this.start;
        let idx = 0;
        while (curr) {
            console.log(idx, curr.item);
            curr = curr.next;
            idx++;
        }
    }

    prepend(item: T): void {
        let node: Node<T> = {
            item,
            prev: undefined,
            next: undefined,
        };
        if (this.start) {
            this.start.prev = node;
            node.next = this.start;
        }
        this.start = node;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        }

        if (idx === 0) {
            this.prepend(item);
            console.log("prepended");
            this.printList();
            return;
        }

        if (idx === this.length) {
            this.append(item);
            console.log("appended");
            this.printList();
            return;
        }

        // find the item at idx, which we will insert in front of
        let curr = this.start;
        for (let i = 0; i < idx; i++) {
            curr = curr?.next;
        }
        // curr is now the one we need to insert in front of
        const node: Node<T> = {
            item,
            next: curr,
            prev: curr?.prev,
        };
        if (curr) {
            curr.prev = node;
        }
        if (node.prev) {
            node.prev.next = node;
        }
        this.printList();

        this.length++;
    }
    append(item: T): void {
        // all good :)
        let lastNode = this.start;
        while (lastNode?.next) {
            lastNode = lastNode.next;
        }
        let node: Node<T> = {
            item,
            prev: lastNode,
            next: undefined,
        };
        if (lastNode) {
            lastNode.next = node;
        } else {
            this.start = node;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        let iter = this.start;
        while (iter && iter?.item !== item) {
            iter = iter?.next;
        }
        if (!iter) return undefined;
        if (iter.next) {
            iter.next.prev = iter.prev;
        }
        if (iter.prev) {
            iter.prev.next = iter.next;
        }
        if (this.start === iter) {
            this.start = iter.next;
        }
        this.length--;
        return iter.item;
    }
    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined;
        }
        let node: Node<T> | undefined = this.start!;
        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }
        return node?.item;
    }
    removeAt(idx: number): T | undefined {
        let iter = this.start;
        for (let i = 0; i < idx; i++) {
            iter = this.start?.next;
        }
        if (!iter) return undefined;
        if (iter.next) {
            iter.next.prev = iter.prev;
        }
        if (iter.prev) {
            iter.prev.next = iter.next;
        }
        if (iter === this.start) {
            this.start = iter.next;
        }
        this.length--;
        return iter.item;
    }
}

type Node<T> = {
    item: T;
    prev?: Node<T>;
    next?: Node<T>;
};

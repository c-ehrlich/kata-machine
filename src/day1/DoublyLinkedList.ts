type Node<T> = {
    item: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    public head: Node<T> | undefined;
    public tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { item };
        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    append(item: T): void {
        const node: Node<T> = { item };
        this.length++;

        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    private getNode(idx: number): Node<T> | undefined {
        let ptr = this.head;

        for (let i = 0; i < idx; i++) {
            ptr = ptr?.next;
        }

        return ptr;
    }

    get(idx: number): T | undefined {
        return this.getNode(idx)?.item;
    }

    insertAt(item: T, idx: number): void {
        this.length++;

        if (!this.head) {
            this.prepend(item);
            return;
        }

        const node: Node<T> = { item };
        let insertAt = this.getNode(idx);
        const prev = insertAt?.prev ?? this.tail;

        node.next = insertAt;
        node.prev = prev;

        if (insertAt) {
            insertAt.prev = node;
        }

        if (prev) {
            prev.next = node;
        }

        if (idx === 0) {
            this.head = node;
        }

        if (!node.next) {
            this.tail = node;
        }
    }

    remove(item: T): T | undefined {
        let ptr = this.head;

        do {
            console.log("remove do");
            if (item === ptr?.item) {
                this.length--;

                if (ptr.prev) {
                    ptr.prev.next = ptr.next;
                }

                if (ptr.next) {
                    ptr.next.prev = ptr.prev;
                }

                if (this.head === ptr) this.head = ptr.next;
                if (this.tail === ptr) this.tail = ptr.prev;

                delete ptr.next;
                delete ptr.prev;

                return ptr.item;
            }
            ptr = ptr?.next;
        } while (ptr?.next);

        return undefined;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getNode(idx);
        if (!node) return undefined;

        this.length--;

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) this.head = node.next;
        if (this.tail === node) this.tail = node.prev;

        delete node.prev;
        delete node.next;

        return node.item;
    }
}

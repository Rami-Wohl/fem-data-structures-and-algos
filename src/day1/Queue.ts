type QueueNode<T> = {
    value: T;
    next?: QueueNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head: QueueNode<T> | undefined;
    private tail: QueueNode<T> | undefined;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newItem: QueueNode<T> = {
            value: item,
        };

        if (!this.tail) {
            this.head = newItem;
            this.tail = newItem;
        } else {
            const oldTail = this.tail;
            this.tail = newItem;
            oldTail.next = newItem;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = undefined;
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return oldHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

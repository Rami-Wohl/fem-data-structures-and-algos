type StackNode<T> = {
    value: T;
    prev?: StackNode<T>;
};

export default class Stack<T> {
    public length: number;
    private head: StackNode<T> | undefined;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const newItem: StackNode<T> = {
            value: item,
        };

        this.length++;

        if (!this.head) {
            this.head = newItem;
            return;
        }

        newItem.prev = this.head;
        this.head = newItem;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;
        this.length--;

        const head = this.head;
        this.head = this.head.prev;
        head.prev = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

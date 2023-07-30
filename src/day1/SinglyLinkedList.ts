type SinglyLinkedListNode<T> = {
    value: T;
    next?: SinglyLinkedListNode<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head: SinglyLinkedListNode<T> | undefined;
    private tail: SinglyLinkedListNode<T> | undefined;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = { value: item };
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length || idx < 0) {
            return;
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else {
            let tmp = this.head;
            let i: number = 0;

            while (i < idx - 1) {
                tmp = tmp?.next;
                i++;
            }
            if (!tmp) return;
            const newNode: SinglyLinkedListNode<T> = { value: item };
            let nextNode = tmp.next;

            if (nextNode) {
                newNode.next = nextNode;
                tmp.next = newNode;
            }
        }

        this.length++;
    }

    append(item: T): void {
        const newNode: SinglyLinkedListNode<T> = { value: item };

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (this.head?.value === item) {
            const oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = undefined;
            this.length--;
            return oldHead.value;
        }

        let tmp = this.head;
        let i: number = 0;

        while (i < this.length) {
            if (tmp?.next?.value === item) {
                break;
            }
            tmp = tmp?.next;
            i++;
            return undefined;
        }

        if (!tmp?.next) return undefined;

        let nextNode = tmp.next;

        if (nextNode.next) {
            tmp.next = nextNode.next;
            nextNode.next = undefined;
        } else {
            this.tail = tmp;
        }

        this.length--;
        return nextNode.value;
    }

    get(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) return undefined;

        let tmp = this.head;
        let i: number = 0;

        while (i < idx) {
            tmp = tmp?.next;
            i++;
        }
        if (!tmp) return undefined;

        return tmp.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }

        if (idx === 0 && this.head) {
            const oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = undefined;
            this.length--;
            return oldHead.value;
        }

        let tmp = this.head;
        let i: number = 0;

        while (i < idx - 1) {
            tmp = tmp?.next;
            i++;
        }

        if (!tmp?.next) return undefined;

        const nextNode = tmp.next;

        if (nextNode.next) {
            tmp.next = nextNode.next;
            nextNode.next = undefined;
        } else {
            this.tail = tmp;
        }

        this.length--;
        return nextNode.value;
    }
}

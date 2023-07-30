export default class DoublyLinkedList<T> {
    public length: number;
    private head: ListNode<T> | undefined;
    private tail: ListNode<T> | undefined;

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
            oldHead.prev = this.head;
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

            while (i < idx) {
                tmp = tmp?.next;
                i++;
            }
            if (!tmp) return;
            const newNode: ListNode<T> = { value: item };
            let prevNode = tmp.prev;

            if (prevNode) {
                prevNode.next = newNode;
                newNode.prev = prevNode;
            }

            newNode.next = tmp;
            tmp.prev = newNode;
        }

        this.length++;
    }

    append(item: T): void {
        const newNode: ListNode<T> = { value: item };

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = newNode;
            this.tail.prev = oldTail;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let tmp = this.head;
        let i: number = 0;

        while (i < this.length) {
            if (tmp?.value === item) {
                break;
            }
            tmp = tmp?.next;
            i++;
            return undefined;
        }

        if (!tmp) return undefined;

        let prevNode = tmp.prev;
        let nextNode = tmp.next;
        if (prevNode) {
            prevNode.next = nextNode;
        } else {
            this.head = nextNode;
        }
        if (nextNode) {
            nextNode.prev = prevNode;
        } else {
            this.tail = prevNode;
        }
        tmp.prev = undefined;
        tmp.next = undefined;
        this.length--;
        return tmp.value;
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
        if (idx >= this.length || idx < 0) return undefined;

        let tmp = this.head;
        let i: number = 0;

        while (i < idx) {
            tmp = tmp?.next;
            i++;
        }
        if (!tmp) return undefined;

        let prevNode = tmp.prev;
        let nextNode = tmp.next;
        if (prevNode) {
            prevNode.next = nextNode;
        } else {
            this.head = nextNode;
        }
        if (nextNode) {
            nextNode.prev = prevNode;
        } else {
            this.tail = prevNode;
        }
        tmp.prev = undefined;
        tmp.next = undefined;

        this.length--;
        return tmp.value;
    }
}

import ArrayList from "./ArrayList";

export default class MinHeap {
    public length: number;
    private arraylist: ArrayList<number>;

    constructor() {
        this.length = 0;
        this.arraylist = new ArrayList(3);
    }

    swapUp(startIndex: number, value: number): void {
        const parentIndex = Math.floor((startIndex - 1) / 2);

        const parentNode = this.arraylist.get(parentIndex);

        if (!parentNode) {
            return;
        }

        if (value < parentNode) {
            this.swap(parentIndex, parentNode, startIndex, value);
            this.swapUp(parentIndex, value);
        }
    }

    swap(
        firstIdx: number,
        firstNode: number,
        secondIdx: number,
        secondNode: number,
    ): void {
        const tmp = firstNode;
        this.arraylist.update(firstIdx, secondNode);
        this.arraylist.update(secondIdx, tmp);
    }

    insert(value: number): void {
        this.length++;

        this.arraylist.append(value);

        if (this.length === 1) {
            return;
        }

        this.swapUp(this.length - 1, value);
    }

    swapDown(startIndex: number, value: number): void {
        const leftChildIndex = 2 * startIndex + 1;
        const rightChildIndex = 2 * startIndex + 2;

        const leftChild = this.arraylist.get(leftChildIndex);
        const rightChild = this.arraylist.get(rightChildIndex);

        if (!leftChild) {
            return;
        }

        if (!rightChild && value > leftChild) {
            this.swap(startIndex, value, leftChildIndex, leftChild);
            this.swapDown(leftChildIndex, value);
            return;
        }

        if (rightChild && value <= Math.min(leftChild, rightChild)) {
            return;
        }

        if (rightChild && leftChild < rightChild) {
            this.swap(startIndex, value, leftChildIndex, leftChild);
            this.swapDown(leftChildIndex, value);
            return;
        }

        if (rightChild && leftChild >= rightChild) {
            this.swap(startIndex, value, rightChildIndex, rightChild);
            this.swapDown(rightChildIndex, value);
            return;
        }
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) {
            return this.arraylist.removeAt(0);
        }

        const firstNode = this.arraylist.get(0);

        const lastNode = this.arraylist.removeAt(
            this.arraylist.length - 1,
        ) as number;

        this.arraylist.update(0, lastNode);

        this.swapDown(0, lastNode);

        return firstNode;
    }
}

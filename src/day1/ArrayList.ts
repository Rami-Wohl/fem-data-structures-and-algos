export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private buffer: T[];

    constructor(initialCapacity: number) {
        this.length = 0;
        this.capacity = initialCapacity;
        this.buffer = new Array(initialCapacity);
    }

    prepend(item: T): void {
        if (this.length === this.capacity) {
            const current = this.buffer;
            this.capacity = this.capacity * 2;
            this.buffer = new Array(this.capacity);
            for (let i = 0; i < this.length; i++) {
                this.buffer[i + 1] = current[i];
            }
        } else {
            for (let i = this.length - 1; i >= 0; i--) {
                this.buffer[i + 1] = this.buffer[i];
            }
        }
        this.length++;
        this.buffer[0] = item;
        console.log(this.buffer);
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            const current = this.buffer;
            this.capacity = this.capacity * 2;
            this.buffer = new Array(this.capacity);
            for (let i = 0; i < idx; i++) {
                this.buffer[i] = current[i];
            }
            for (let i = idx; i < current.length; i++) {
                this.buffer[i + 1] = current[i];
            }
        } else {
            for (let i = this.length; i > idx; i--) {
                this.buffer[i] = this.buffer[i - 1];
            }
        }
        this.buffer[idx] = item;

        this.length++;

        console.log(this.buffer);
    }

    append(item: T): void {
        if (this.length === this.capacity) {
            const current = this.buffer;
            this.capacity = this.capacity * 2;
            this.buffer = new Array(this.capacity);
            for (let i = 0; i < this.length; i++) {
                this.buffer[i] = current[i];
            }
        }
        this.buffer[this.length] = item;

        this.length++;

        console.log(this.buffer);
    }

    remove(item: T): T | undefined {
        let idx: number | undefined;

        for (let i = 0; i < this.length; i++) {
            if (this.buffer[i] === item) {
                idx = i;
            }
        }

        if (idx === undefined) return undefined;

        const value = this.buffer[idx];

        for (let i = idx; i < this.length; i++) {
            this.buffer[i] = this.buffer[i + 1];
        }

        this.length--;

        return value;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        return this.buffer[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;

        const value = this.buffer[idx];

        for (let i = idx; i < this.length; i++) {
            this.buffer[i] = this.buffer[i + 1];
        }

        this.length--;

        return value;
    }
}

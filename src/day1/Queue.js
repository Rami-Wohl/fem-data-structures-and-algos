"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.length = 0;
    }
    Queue.prototype.enqueue = function (item) {
        var newItem = {
            value: item,
        };
        if (!this.tail) {
            this.head = newItem;
            this.tail = newItem;
        }
        else {
            var oldTail = this.tail;
            this.tail = newItem;
            oldTail.next = newItem;
        }
        this.length++;
    };
    Queue.prototype.deque = function () {
        if (!this.head) {
            return undefined;
        }
        var oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = undefined;
        this.length--;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return oldHead.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Queue;
}());
exports.default = Queue;

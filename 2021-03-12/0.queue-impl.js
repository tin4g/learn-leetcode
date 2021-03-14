// 2021-03-12
function Queue() {
    this.data = new Array();
}

Queue.prototype = {
    data: null,

    enqueue: function(item) {
        return this.data.push(item);
    },

    dequeue: function() {
        return this.data.shift();
    },

    head: function() {
        if (this.isEmpty()) return undefined;
        return this.data[0];
    },

    tail: function() {
        if (this.isEmpty()) return undefined;
        return this.data[this.data.length - 1];
    },

    isEmpty: function() {
        return this.data.length === 0;
    }
};

// 2021-03-13
function CircularQueue(size) {
    Queue.call(this);

    this.data = new Array(size);
    this.size = size;
    this.headIndex = -1;
    this.tailIndex = -1;
}

CircularQueue.prototype = {
    __proto__: Queue.prototype,

    size: null,
    headIndex: null,
    tailIndex: null,

    __wrapMethods__: {
        push: function(item) {
            if (this.isFull()) return false;

            const index = (this.tailIndex + 1) % this.size;

            this.data[index] = item;
            if (this.headIndex === -1) this.headIndex = 0;
            this.tailIndex = index;

            return true;
        },

        shift: function() {
            if (this.isEmpty()) return false;

            const index = this.tailIndex === this.headIndex ? -1 : (this.headIndex + 1) % this.size;

            this.data[this.headIndex] = undefined;
            if (this.tailIndex === this.headIndex) this.tailIndex = -1;
            this.headIndex = index;

            return true;
        }
    },

    enqueue: function(item) {
        return this.__wrapMethods__.push.call(this, item);
    },

    dequeue: function() {
        return this.__wrapMethods__.shift.call(this);
    },

    head: function() {
        if (this.isEmpty()) return undefined;
        return this.data[this.headIndex];
    },

    tail: function() {
        if (this.isEmpty()) return undefined;
        return this.data[this.tailIndex];
    },

    isEmpty: function() {
        return this.tailIndex === -1 && this.headIndex === -1;
    },

    isFull: function() {
        return (this.tailIndex - this.headIndex + this.size) % this.size === this.size - 1;
    }
};

CircularQueue.prototype.constructor = CircularQueue;

function main() {
    const queue = new CircularQueue(2);

    // enqueue
    console.log(queue.head()); // => undefined
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.tail()); // => 1

    // dequeue
    console.log(queue.head()); // => 0
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    console.log(queue.tail()); // => undefined

    // enqueue & dequeue
    console.log(queue.head()); // => undefined
    queue.enqueue(0);
    queue.enqueue(1);
    queue.dequeue();
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.tail()); // => 2
}

// main();

// export default Queue;
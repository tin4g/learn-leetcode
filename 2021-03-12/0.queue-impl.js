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

function main() {
    const queue = new Queue();

    // enqueue
    console.log(queue.head()); // => undefined
    queue.enqueue(0);
    console.log(queue.tail()); // => 0

    // dequeue
    console.log(queue.head()); // => 0
    queue.dequeue();
    console.log(queue.tail()); // => undefined
}

// main();

// export default Queue;
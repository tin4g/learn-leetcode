// 2021-03-12
function Stack() {
    this.data = new Array();
}

Stack.prototype = {
    data: null,

    push: function(item) {
        return this.data.push(item);
    },

    pop: function() {
        return this.data.pop();
    },

    bottom: function() {
        if (this.isEmpty()) return undefined;
        return this.data[0];
    },

    top: function() {
        if (this.isEmpty()) return undefined;
        return this.data[this.data.length - 1];
    },

    isEmpty: function() {
        return this.data.length === 0;
    }
};

// 2021-03-13
function MinStack() {
    Stack.call(this);
}

MinStack.prototype = {
    __proto__: Stack.prototype,

    getMinimum: function() {
        if (this.isEmpty()) return undefined;
        return Math.min(...this.data);
    }
};

MinStack.prototype.constructor = MinStack;

function main() {
    const stack = new MinStack();

    // push
    console.log(stack.bottom()); // => undefined
    stack.push(0);
    console.log(stack.top());    // => 0

    // pop
    console.log(stack.bottom()); // => 0
    stack.pop();
    console.log(stack.top());    // => undefined

    // getMinimum
    console.log(stack.getMinimum()); // => undefined
    stack.push(1);
    stack.push(0);
    console.log(stack.getMinimum()); // => 0
    stack.pop();
    console.log(stack.getMinimum()); // => 1
}

// main();

// export default Stack;
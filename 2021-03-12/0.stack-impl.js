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

function main() {
    const stack = new Stack();

    // push
    console.log(stack.bottom()); // => undefined
    stack.push(0);
    console.log(stack.top());    // => 0

    // pop
    console.log(stack.bottom()); // => 0
    stack.pop();
    console.log(stack.top());    // => undefined
}

// main();

// export default Stack;
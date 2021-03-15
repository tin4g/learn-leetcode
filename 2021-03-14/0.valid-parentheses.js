// import Stack from "../2021-03-12/0.stack-impl";

// 2021-03-14
function validParentheses(params) {
    let ret = false;

    const stack = new Stack();
    const table = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < params.length; i++) {
        const string = params[i];

        if (table[stack.top()] === string) {
            stack.pop();
        } else {
            stack.push(string);
        }
    }

    ret = stack.isEmpty();

    return ret;
}

function main() {
    console.log(validParentheses("()"));     // => true
    console.log(validParentheses("()[]{}")); // => true
    console.log(validParentheses("(]"));     // => false
    console.log(validParentheses("([)]"));   // => false
    console.log(validParentheses("{[]}"));   // => true
}

// main();
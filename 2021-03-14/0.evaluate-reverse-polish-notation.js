// import Stack from "../2021-03-12/0.stack-impl";

// 2021-03-14
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return (x / y) | 0; }

function evaluateReversePolishNotation(params) {
    let ret = NaN;

    if (params.length === 1) return params[0];

    const stack = new Stack();
    const table = { "+": add, "-": subtract, "*": multiply, "/": divide };

    for (let i = 0; i < params.length; i++) {
        const s1 = params[i];
        const o1 = table[s1];

        if (o1 === undefined) {
            const number = parseInt(s1);
            stack.push(number);
        } else {
            const s2 = stack.top();
            const o2 = table[s2];

            if (o2 === undefined) {
                const n2 = stack.pop();
                const n1 = stack.pop();

                ret = o1(n1, n2);
                stack.push(ret);
            } else {
                stack.push(o1);
            }
        }
    }

    return ret;
}

function main() {
    console.log(evaluateReversePolishNotation(["2", "1", "+", "3", "*"]));  // => 9
    console.log(evaluateReversePolishNotation(["4", "13", "5", "/", "+"])); // => 6
    console.log(evaluateReversePolishNotation(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // => 22
}

// main();
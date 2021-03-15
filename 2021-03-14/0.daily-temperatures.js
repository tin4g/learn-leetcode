// import Stack from "../2021-03-12/0.stack-impl";

// 2021-03-14
function dailyTemperatures(params) {
    let ret = new Array(params.length).fill(NaN);

    const stack = new Stack();

    for (let i = 0; i < params.length; i++) {
        if (i === 0) {
            stack.push([0, params[0]]);
            continue;
        }

        const today = i;
        const temperature = params[i];

        while (!stack.isEmpty() && stack.top()[1] < temperature) {
            const days = today - stack.top()[0];
            ret[today - days] = days;
            stack.pop();
        }

        stack.push([today, temperature]);

        if (i === params.length - 1) {
            while (!stack.isEmpty()) {
                ret[stack.top()[0]] = 0;
                stack.pop();
            }
        }
    }

    return ret;
}

function main() {
    console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // => [1, 1, 4, 2, 1, 1, 0, 0]
}

// main();
// 2021-03-17
function maxConsecutiveOnes(params) {
    let ret = 0;
    let counter = 0;

    for (let i = 0; i < params.length; i++) {
        const number = params[i];

        if (number === 1) counter++;

        if (number === 0 || i === params.length - 1) {
            ret = ret > counter ? ret : counter;
            counter = 0;
        }
    }

    return ret;
}

function main() {
    console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // => 3
}

// main();
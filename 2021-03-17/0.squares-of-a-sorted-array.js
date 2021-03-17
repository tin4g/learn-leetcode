// 2021-03-17
function squaresOfASortedArray(params) {
    let ret = new Array(params.length).fill(NaN);

    for (let i = 0; i < params.length; i++) {
        const number = params[i];
        ret[i] = number * number;
    }

    ret = ret.sort((x, y) => x - y);

    return ret;
}

function main() {
    console.log(squaresOfASortedArray([-4, -1, 0, 3, 10])); // => [0, 1, 9, 16, 100]
    console.log(squaresOfASortedArray([-7, -3, 2, 3, 11])); // => [4, 9, 9, 49, 121]
}

// main();
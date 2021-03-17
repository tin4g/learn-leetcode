// 2021-03-17
function findNumbersWithEvenNumberOfDigits(params) {
    let ret = 0;

    for (let i = 0; i < params.length; i++) {
        let number = params[i];
        let counter = 0;

        do {
            counter++;
            number /= 10;
        } while ((number | 0) > 0);

        if (counter % 2 === 0) ret++;
    }

    return ret;
}

function main() {
    console.log(findNumbersWithEvenNumberOfDigits([12, 345, 2, 6, 7896]));  // => 2
    console.log(findNumbersWithEvenNumberOfDigits([555, 901, 482, 1771]));  // => 1
}

// main();
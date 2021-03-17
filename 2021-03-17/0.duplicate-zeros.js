// 2021-03-17
function duplicateZeros(params) {
    const ret = null;
    const length = params.length;

    for (let i = 0; i < length; i++) {
        const number = params[i];

        if (number === 0) {
            for (let j = length - 1; j > i; j--) {
                params[j] = params[j - 1];
            }

            i++;
        }
    }

    return ret;
}

function main() {
    let array = null;

    array = [1, 0, 2, 3, 0, 4, 5, 0];
    console.log(duplicateZeros(array), array); // => null [1, 0, 0, 2, 3, 0, 0, 4]

    array = [1, 2, 3];
    console.log(duplicateZeros(array), array); // => null [1, 2, 3]
}

// main();
// 2021-03-17
function mergeSortedArray(params) {
    const ret = null;

    const a1 = params[0];
    const l1 = params[1];

    const a2 = params[2];
    const l2 = params[3];

    const length = l1 + l2;

    let counter = 0;

    for (let i = 0; i < length; i++) {
        const n1 = a1[i];
        const n2 = a2[i];

        if (n1 > n2 || i > l1 - 1 + counter) {
            for (let j = a1.length - 1; j > i; j--) {
                a1[j] = a1[j - 1];
            }

            a1[i] = n2;
            counter++;
        } else {
            for (let j = a2.length; j > i; j--) { // javascript only
                a2[j] = a2[j - 1];
            }

            a2[i] = n2;
        }
    }

    return ret;
}

function main() {
    let array = null;

    array = [1, 2, 3, 0, 0, 0];
    console.log(mergeSortedArray([array, 3, [2, 5, 6], 3]), array); // => null [1, 2, 2, 3, 5, 6]

    array = [1];
    console.log(mergeSortedArray([array, 1, [], 0]), array); // => null [1]
}

// main();
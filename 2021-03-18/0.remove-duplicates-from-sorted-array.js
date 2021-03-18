// 2021-03-18
function removeDuplicatesFromSortedArray(params) {
    let ret = NaN;

    const length = params.length;

    for (let i = 0; i < length; i++) {
        const n1 = params[i];
        const n2 = params[i - 1];

        if (n1 === n2) {
            for (let j = i; j < length - 1; j++) {
                params[j] = params[j + 1];
            }

            params[length - 1] = undefined;
            i--;
        }

        if (n1 === undefined) {
            ret = i;
            break;
        }

        if (i === length - 1) {
            ret = i + 1;
        }
    }

    return ret;
}

function main() {
    console.log(removeDuplicatesFromSortedArray([1, 1, 2])); // => 2
    console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // => 5
}

// main();
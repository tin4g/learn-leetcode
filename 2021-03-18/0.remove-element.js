// 2021-03-18
function removeElement(params) {
    let ret = NaN;

    const target = params[1];
    const array = params[0];
    const length = params[0].length;

    for (let i = 0; i < length; i++) {
        const number = array[i];

        if (number === target) {
            for (let j = i; j < length - 1; j++) {
                array[j] = array[j + 1];
            }

            array[length - 1] = undefined;
            i--;
        }

        if (number === undefined) {
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
    console.log(removeElement([[3, 2, 2, 3], 3])); // => 2
    console.log(removeElement([[0, 1, 2, 2, 3, 0, 4, 2], 2])); // => 5
}

// main();
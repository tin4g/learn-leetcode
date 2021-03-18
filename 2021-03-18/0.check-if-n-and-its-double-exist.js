// 2021-03-18
function checkIfNAndItsDoubleExist(params) {
    let ret = false;

    for (let i = 0; i < params.length; i++) {
        const n1 = params[i];
        const n2 = 2 * n1;

        const index = params.indexOf(n2);
        if (index !== -1 && index !== i) return true;
    }

    return ret;
}

function main() {
    console.log(checkIfNAndItsDoubleExist([10, 2, 5, 3]));  // => true
    console.log(checkIfNAndItsDoubleExist([7, 1, 14, 11])); // => true
    console.log(checkIfNAndItsDoubleExist([3, 1, 7, 11]));  // => false
}

// main();
// 2021-03-18
function validMountainArray(params) {
    let ret = true;

    if (params.length < 3) return false;

    let state = 0; // 0 准备; 1 上山; -1 下山

    for (let i = 0; i < params.length; i++) {
        const n1 = params[i];
        const n2 = params[i + 1];

        if (n2 === undefined) break;

        if (state === 0 || state === 1) {
            if (n1 < n2) {
                if (state === 0) state = 1;
                continue;
            } else {
                if (state === 0 || n1 === n2) return false;
                state = -1;
            }
        } else {
            if (n1 <= n2) return false;
        }
    }

    ret = state === -1;

    return ret;
}

function main() {
    console.log(validMountainArray([2, 1])); // => false
    console.log(validMountainArray([3, 5, 5])); // => false
    console.log(validMountainArray([0, 3, 2, 1])); // => false
}

// main();
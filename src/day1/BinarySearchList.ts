let iter = 0;

export default function bs_list(haystack: number[], needle: number): boolean {
    // const idx = Math.floor(haystack.length / 2);
    // iter++;
    // if (haystack[idx] > needle) {
    //     return bs_list(haystack.slice(0, idx - 1), needle);
    // }

    // if (haystack[idx] < needle) {
    //     return bs_list(haystack.slice(idx + 1), needle);
    // }

    // if (haystack[idx] === needle) {
    //     console.log("found it: ", needle, iter);
    //     iter = 0;
    //     return true;
    // } else {
    //     console.log("Not in array: ", needle, iter);
    //     iter = 0;
    //     return false;
    // }

    let high = haystack.length;
    let low = 0;
    while (low < high) {
        iter++;
        let middle = Math.floor(low + (high - low) / 2);
        let val = haystack[middle];
        if (val === needle) {
            console.log("found it: ", needle, iter);
            iter = 0;
            return true;
        }
        if (val > needle) {
            high = middle;
        } else {
            low = middle + 1;
        }
    }
    console.log("Not in array: ", needle, iter);
    iter = 0;
    return false;
}

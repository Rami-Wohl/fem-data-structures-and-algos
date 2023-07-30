export default function two_crystal_balls(breaks: boolean[]): number {
    let index = 0;
    let sqrt = Math.floor(Math.sqrt(breaks.length));
    let iter = 0;
    while (index < breaks.length) {
        iter++;
        if (breaks[index + sqrt] === false) {
            index = index + sqrt;
        } else {
            if (breaks[index]) {
                console.log("actual: ", iter, "sqrt: ", 2 * sqrt);
                return index;
            } else {
                index++;
            }
        }
    }
    console.log("actual: ", iter, "sqrt: ", 2 * sqrt);
    return -1;
}

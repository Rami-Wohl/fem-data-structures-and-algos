export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let foundNeedleInHaystack = false;

    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            foundNeedleInHaystack = true;
        }
    }

    return foundNeedleInHaystack;
}

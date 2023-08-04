function qs(arr: number[], hi: number, lo: number): void {
    if (hi <= lo) {
        return;
    }

    const pivotIdx = part(arr, hi, lo);

    qs(arr, pivotIdx - 1, lo);
    qs(arr, hi, pivotIdx + 1);
}

function part(arr: number[], hi: number, lo: number): number {
    const pivot = arr[hi];

    let index = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            index++;
            const tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }

    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;

    return index;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, arr.length - 1, 0);
}

export default function bubble_sort(arr: number[]): void {
    let iter = 0;
    for (let i = arr.length; i > 1; i--) {
        for (let j = 0; j + 1 < i; j++) {
            iter++;
            if (arr[j] > arr[j + 1]) {
                let high = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = high;
            }
        }
    }
    console.log("actual: ", iter, "n^2: ", arr.length * arr.length);
}

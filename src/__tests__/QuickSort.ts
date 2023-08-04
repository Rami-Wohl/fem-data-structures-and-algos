import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const arr2 = [9, 3, 7, 4, 69, 420, 42, 55];

    debugger;
    quick_sort(arr);
    quick_sort(arr2);
    console.log(arr2);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
    expect(arr2).toEqual([3, 4, 7, 9, 42, 55, 69, 420]);
});

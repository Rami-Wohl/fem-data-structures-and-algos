import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const arr2 = [999, 888, 777, 666, 555, 444, 333, 222, 111];
    const arr3 = [1];
    const arr4 = [2, 1];
    debugger;
    bubble_sort(arr);
    bubble_sort(arr2);
    bubble_sort(arr3);
    bubble_sort(arr4);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
    expect(arr2).toEqual([111, 222, 333, 444, 555, 666, 777, 888, 999]);
    expect(arr3).toEqual([1]);
    expect(arr4).toEqual([1, 2]);
});

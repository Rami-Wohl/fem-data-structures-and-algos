import binary_fn from "@code/BinarySearchList";

test("binary search array", function () {
    const foo = Array.from(Array(50001), (_, i) => i + 1).filter(
        (n) => n !== 420,
    );
    expect(binary_fn(foo, 25002)).toEqual(true);
    expect(binary_fn(foo, 50001)).toEqual(true);
    expect(binary_fn(foo, 50002)).toEqual(false);
    expect(binary_fn(foo, 69421)).toEqual(false);
    expect(binary_fn(foo, 69422)).toEqual(false);
    expect(binary_fn(foo, 1)).toEqual(true);
    expect(binary_fn(foo, 0)).toEqual(false);
    expect(binary_fn(foo, 420)).toEqual(false);
    console.log("yeah binary");
});

import two_crystal_balls from "@code/TwoCrystalBalls";

test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    let idx2 = Math.floor(Math.random() * 1000000);
    const data2 = new Array(1000000).fill(false);

    for (let i = idx2; i < 1000000; ++i) {
        data2[i] = true;
    }

    const data3 = Array.from(new Array(1000)).map((_) => false);
    data3[999] = true;

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(data2)).toEqual(idx2);
    expect(two_crystal_balls(data3)).toEqual(999);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
    expect(two_crystal_balls(new Array(821).fill(true))).toEqual(0);
});

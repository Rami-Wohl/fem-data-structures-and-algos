export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);

    list.prepend(11);
    list.prepend(13);
    list.append(15);
    list.append(17);

    list.prepend(19);
    list.prepend(21);
    list.append(23);
    list.append(25);

    expect(list.length).toEqual(10);
    list.insertAt(999, 2);
    expect(list.get(2)).toEqual(999);
    expect(list.get(3)).toEqual(13);
    list.insertAt(999, 10);
    list.insertAt(999, 12);
    expect(list.get(13)).toEqual(undefined);
}

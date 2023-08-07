import Trie from "@code/Trie";

test("Trie", function () {
    const trie = new Trie();
    trie.insert("foo");
    trie.insert("fool");
    trie.insert("foolish");
    trie.insert("bar");
    trie.insert("bloop");
    trie.insert("bloo");

    trie.delete("bloo");

    expect(trie.find("blo")).toEqual(["bloop"]);

    trie.delete("bloop");

    expect(trie.find("b")).toEqual(["bar"]);

    expect(trie.find("fo").sort()).toEqual(["foo", "fool", "foolish"]);

    trie.delete("fool");

    expect(trie.find("fo").sort()).toEqual(["foo", "foolish"]);

    expect(trie.find("bla")).toEqual([]);

    trie.insert("fwabble");
    trie.delete("foo");

    expect(trie.find("f").sort()).toEqual(["foolish", "fwabble"]);
});

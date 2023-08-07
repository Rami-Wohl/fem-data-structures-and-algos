type TrieHeadNode = {
    children: TrieNode[];
};

type TrieNode = {
    parent: TrieNode | TrieHeadNode;
    value: string;
    isWord: boolean;
    children: TrieNode[];
};

export default class Trie {
    private head: TrieHeadNode;

    constructor() {
        this.head = {
            children: [],
        };
    }

    insert(item: string): void {
        let curr: TrieHeadNode | TrieNode = this.head;

        for (const char of item) {
            const nodeIfExists: TrieNode | undefined = curr.children.find(
                (child) => child.value === char,
            );
            if (nodeIfExists) {
                curr = nodeIfExists;
            } else {
                const newNode: TrieNode = {
                    value: char,
                    isWord: false,
                    parent: curr,
                    children: [],
                };
                curr.children.push(newNode);
                curr = newNode;
            }
        }

        (curr as TrieNode).isWord = true;
    }

    delete(item: string): void {
        let curr: TrieHeadNode | TrieNode = this.head;

        for (const char of item) {
            const nodeIfExists: TrieNode | undefined = curr.children.find(
                (child) => child.value === char,
            );

            if (nodeIfExists) {
                curr = nodeIfExists;
            } else {
                console.log(`'${item}' doesn't exist in trie`);
                return;
            }
        }

        (curr as TrieNode).isWord = false;

        for (const char of item) {
            const parent = (curr as TrieNode).parent;
            curr = parent;

            if (curr.children.length > 0) {
                return;
            }

            if ((curr as TrieNode).isWord === true) {
                return;
            }

            parent.children = [];
        }
    }

    recurse(curr: TrieNode, path: string, matches: string[]): void {
        path = path + curr.value;

        if (curr.isWord) {
            matches.push(path);
        }

        if (curr.children?.length === 0) {
            return;
        }

        curr.children.forEach((child) => {
            this.recurse(child, path, matches);
        });
    }

    find(partial: string): string[] {
        let curr: TrieHeadNode | TrieNode = this.head;

        for (const char of partial) {
            const nodeIfExists: TrieNode | undefined = curr.children.find(
                (child) => child.value === char,
            );
            if (nodeIfExists) {
                curr = nodeIfExists;
            } else {
                console.log(`'${partial}' doesn't exist in trie`);
                return [];
            }
        }

        let matches: string[] = [];

        curr.children.forEach((child) => {
            this.recurse(child, partial, matches);
        });

        return matches;
    }
}

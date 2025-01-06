class TrieNode {
  children: { [key: string]: TrieNode };
  isEnd: boolean;

  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  getWords(): string[] {
    const words: string[] = [];
    const dfs = (node: TrieNode, path: string) => {
      if (node.isEnd) words.push(path);

      for (const char in node.children) {
        dfs(node.children[char], path + char);
      }
    };
    dfs(this.root, "");
    return words;
  }
}

import * as fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((row) => row.replace(/\r/g, ""));

const N = +input[0];
const sortedInput = input.slice(1).sort((a, b) => b.localeCompare(a));

const trie = new Trie();

for (let i = 0; i < N; i++) {
  if (!trie.startsWith(sortedInput[i])) trie.insert(sortedInput[i]);
}

const uniqueWords = trie.getWords();
console.log(uniqueWords.length);

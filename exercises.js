// 1. Array operations
const Head = ([first, ...rest] = arr) => first;
const Tail = ([first, ...rest] = arr) => rest;
const Init = (arr) => arr.slice(0,arr.length-1);
const Last = (arr) => arr.slice(-1);

// 2. Concat
const concat = (a, b) => {};
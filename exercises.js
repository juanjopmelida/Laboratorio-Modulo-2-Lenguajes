// 1. Array operations
const Head = ([first, ...rest] = arr) => first;
const Tail = ([first, ...rest] = arr) => rest;
const Init = (arr) => arr.slice(0,arr.length-1);
const Last = (arr) => arr.slice(-1);

// 2. Concat
const concat = (...nArr) => [].concat(...nArr);

// 3. Clone Merge
const shallowClone = (source) => { return { ...source }};
const deepClone = (source) => JSON.parse(JSON.stringify(source));

const merge = (source, target) => { return  { ...target, ...source }};

// 4. Read Books

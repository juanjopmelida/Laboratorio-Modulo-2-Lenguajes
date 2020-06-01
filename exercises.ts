// 1. Array operations
const Head = ([first, ...rest]) => first;
const Tail = ([first, ...rest]) => rest;
const Init = (arr) => arr.slice(0,arr.length-1);
const Last = (arr) => arr.slice(-1);

// 2. Concat
const concat = (...nArr) => [].concat(...nArr);

// 3. Clone Merge
const shallowClone = (source) => { return { ...source }};
const deepClone = (source) => JSON.parse(JSON.stringify(source));

const merge = (source, target) => { return  { ...target, ...source }};

interface book {
    title: string,
    isRead: boolean
}

const isBookRead = (books: book[], titleToSearch: string): boolean  => {
    return true;
}
const a = 0;
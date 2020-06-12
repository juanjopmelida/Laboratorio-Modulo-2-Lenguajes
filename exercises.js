const firstArr = [1, 3, 5, 7, 11];
const secondArr = [2, 4, 6];
// 1. Array operations
const head = ([first, ...rest]) => first;
console.log(`Head function: ${head(firstArr)}`);
const tail = ([first, ...rest]) => rest;
console.log(`Tail function: ${tail(firstArr)}`);
const init = (arr) => arr.slice(0, arr.length - 1);
console.log(`Init function: ${init(firstArr)}`);
const last = (arr) => arr.slice(-1);
console.log(`Last function: ${last(firstArr)}`);
// 2. Concat
const concat = (...nArr) => [].concat(...nArr);
console.log(`concat function: ${concat(firstArr)}`);
// 3. Clone Merge
const shallowClone = (source) => (Object.assign({}, source));
console.log(`shallowClone function: ${shallowClone(firstArr)}`);
const deepClone = (source) => JSON.parse(JSON.stringify(source));
console.log(`deepClone function: ${deepClone(firstArr)}`);
const merge = (source, target) => (Object.assign(Object.assign({}, target), source));
console.log(`merge function: ${merge(firstArr, secondArr)}`);
const books = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
];
const isBookRead = (title) => books.find(b => b.title === title).isRead;
// 5. Slot Machine
class SlothMachine {
    constructor() {
        this.play = () => {
            this.award += 1;
            this.val1 = Math.random() > 0.5 ? true : false;
            this.val2 = Math.random() > 0.5 ? true : false;
            this.val3 = Math.random() > 0.5 ? true : false;
            console.log(this.val1, this.val2, this.val3);
            if ((this.val1 === this.val2) && (this.val2 === this.val3)) {
                console.log(`Congratulations!!!. You won ${this.award} coins!!`);
            }
            else {
                console.log(`Good luck next time!!`);
            }
        };
    }
}

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const firstArr: number[] = [1, 3, 5, 7, 11];
const secondArr: number[] = [2, 4, 6];

// 1. Array operations
const head = ([first, ...rest]: any) => first;
console.log(`Head function: ${head(firstArr)}`);
const tail = ([first, ...rest]: any) => rest;
console.log(`Tail function: ${tail(firstArr)}`);
const init = (arr: any) => arr.slice(0, arr.length - 1);
console.log(`Init function: ${init(firstArr)}`);
const last = (arr: any) => arr.slice(-1);
console.log(`Last function: ${last(firstArr)}`);

// 2. Concat
const concat = (...nArr) => [].concat(...nArr);
console.log(`concat function: ${concat(firstArr)}`);

// 3. Clone Merge
const shallowClone = (source) => ({ ...source });
console.log(`shallowClone function: ${shallowClone(firstArr)}`);
const deepClone = (source) => JSON.parse(JSON.stringify(source));
console.log(`deepClone function: ${deepClone(firstArr)}`);

const merge = (source : number[], target : number[]) => ({ ...target, ...source });
console.log(`merge function: ${merge(firstArr, secondArr)}`);

// 4. Read Books
interface Book {
    title: string,
    isRead: boolean
}

const books : Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

const isBookRead = (title) => books.find((b) => b.title === title).isRead;

// 5. Slot Machine
class SlothMachine {
  award : number = 0;

  val1 : boolean;

  val2 : boolean;

  val3 : boolean;

  play = () => {
    this.award += 1;
    this.val1 = Math.random() > 0.5;
    this.val2 = Math.random() > 0.5;
    this.val3 = Math.random() > 0.5;
    console.log(this.val1, this.val2, this.val3);
    if ((this.val1 === this.val2) && (this.val2 === this.val3)) {
      console.log(`Congratulations!!!. You won ${this.award} coins!!`);
      this.award = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

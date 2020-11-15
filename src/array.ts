export {};

let numbers:number[] = [1,2,3];
console.log(numbers);

let numbers2: Array<number> = [1,2,3];
console.log(numbers2);

let strs: string[] =['apple','test','hoge'];
console.log(strs);

let strings: Array<string> = ['TypeScript','JavaScript','CooffersScript'];
console.log(strings);

// 2jigen hairetsu
let nijigen:number[][] = [
  [1,2],
  [3,4],
];
console.log(nijigen);

// union types 共用型　（ごちゃまぜ）
let hairetsu:(number|boolean|string)[]  = [1,false,'Japan'];
console.log(hairetsu);

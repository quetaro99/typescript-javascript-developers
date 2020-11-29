export {};

// 型の互換性

// これは代入できる
let fooCompatible: any;
let barCompatible: string = 'string';
console.log(typeof(fooCompatible));
fooCompatible = barCompatible;
// any型は代入した変数の型に遷移していく。
console.log(typeof(fooCompatible));

// これはできない　string型にnumber型を入れる
let fooInCompatible: string;
let barIbCompatible: number = 1;
// fooInCompatible = barIbCompatible;

// これはできる　当たり前　同じ型同士
let fooSrring: string;
let barString: string = 'string';
fooSrring = barString

// これはできる　文字列のリテラル型は文字列型のひとつだから。
let fooLiteral: 'string literal' = 'string literal';
let barLiteral: string ;
barLiteral = fooLiteral;

// これはできる　数字のリテラル型は数字型のひとつだから。
let fooLiteralNum: 1234 = 1234;
let barLiteralNum: number ;
barLiteralNum = fooLiteralNum;

// これもできる  interface　とclass の持っているメンバーが同じ
interface Animal {
  age: number;
}
class Person {
  constructor(public age: number){}
}

let me: Animal;
me = new Person(43);

// これはできない。
// interfaceとclass のメンバーがちがうのでダメ。
interface Animal2 {
  age: number;
  name: string;
}
class Person2 {
  constructor(public age: number){}
}
let me2: Animal2;
// me2 = new Person2(43);

// こうすればできる。
interface Animal3 {
  age: number;
  name: string;
}
class Person3 {
  constructor(public age: number, public name: string){}
}
let me3: Animal3;
me3 = new Person3(43,'Lion');




export {};

// constructor いろいろ

class Person{
  // public name: string;
  // protected age: number;

  // コンストラクタの引数にアクセス修飾子をつけてみる
  constructor(public name:string, private age:number){
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('Qtaro',41);
console.log(me);



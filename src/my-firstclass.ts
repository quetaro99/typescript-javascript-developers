export {};

// クラスの使い方 {}セミコロンは書かない
class Person{
  //引数の型定義を書く 
  name: string;
  age: number;
  // コンストラクタを書く（初期化処理）
  // コンストラクタに型は書かない。戻り値がない。voidもかかない。
  constructor(name: string,age: number){
    this.name = name;    
    this.age = age;
  }
  // メソッドをつけてみる
  profile():string{
    return `name: ${this.name}, age: ${this.age}`;
  }

}

let Qtaro = new Person('Qtaro',41);
// let Jiro = new Person();
console.log(Qtaro);
console.log(Qtaro.profile());


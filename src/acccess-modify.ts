export {};

// クラスの使い方 {}セミコロンは書かない
class Person{
  //引数の型定義を書く 
  // クラス外からあくせすOkなものはpublic、クラス内だけのアクセスはprivateと書く
  // publibは省略できる。書かないとpublicになる。慣習として書かない。
  public name: string;
  private age: number;
  // protected は自分のクラスと派生クラス（子クラス）からアクセスできる。
  protected nationality: string;
  // コンストラクタを書く（初期化処理）
  // コンストラクタに型は書かない。戻り値がない。voidもかかない。
  constructor(name: string,age: number,nationality: string){
    this.name = name;    
    this.age = age;
    this.nationality = nationality;
  }
  // メソッドをつけてみる
  profile():string{
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// Personを親に持つAndroidクラスを作る
class Android extends Person{
  constructor(name: string,age: number,nationality: string){
    super(name,age,nationality);
  }

  Profile():String{
    // ageはprivateでアクセスできないのでコンパイルエラーとなる。
    // nationalityはprotectedだからOK
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    return `name: ${this.name}, nationality: ${this.nationality}`;

  }
}

let Qtaro = new Person('Qtaro',41,'Japan');
// let Jiro = new Person();
// console.log(Qtaro);
console.log(Qtaro.profile());
console.log(Qtaro.name);
// console.log(Qtaro.age);



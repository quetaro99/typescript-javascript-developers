export {};

// クラスの継承

// 親クラス
class Animal{

  constructor(public name:string){}

  run(): string{
    return 'I can run';
  }
}

// 子クラス
class Lion extends Animal{
  //自分のクラスの変数だけコンストラクタから出して宣言する。 親クラスのメンバー変数と差別化したほうがわかりやすい。
  public speed: number;
  constructor(name:string,speed:number){
    //コンストラクタは親クラスのコンストラクタを実行する必要がある。
    // それがsuper()
    super(name);
    this.speed = speed;
  }

  run(): string{
    // 親クラスのメソッドを呼び出す場合は、super.メソッド名
    return `${super.run()} ${this.speed} km/h`;
  }
}

let animal = new Animal('Qtraro');
console.log(animal.run());

let lion = new Lion('Simba',80);
console.log(lion.run());

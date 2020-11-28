export {};

// getter と setter アクセサ

// owner: 所有者を管理、初期化時に設定できる、途中で変更できない。参照できる。
// secretnumber: 個人番号、初期化時に設定できる、途中で変更できる。参照できない。
class myNumberCard{
  // getter,setter で使う変数は慣習として「_」を先頭につける。
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string,secretNumber:number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // ownerを参照するメソッド (getter)
  get owner(){
    return this._owner;
  }

  // secretを更新するメソッド（setter）
  set secretNumber(secretNumber: number){
    this._secretNumber = secretNumber;
  }

  debugPrint(){
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new myNumberCard('Qtaro',1234);
console.log(card.owner);
// card.owner = 'taro';
console.log(card.debugPrint());
card.secretNumber = 2345;
console.log(card.debugPrint());

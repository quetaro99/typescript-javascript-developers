export {};

// 静的メンバー
class Me {
  // はーどコードで初期化
  // staticをつけると静的メンバーになる
  static isProgrammer: boolean = true;
  static firstname: string = 'taro';
  static lastName: string = 'que';

  // 静的メッソッド staticをつければよい。
  static work(): string{
    return 'Hey, Guys!!';
  }

  // 静的メソッドで静的メンバーを使う場合は「クラス名.静的メンバーと」だけど
  // 「this.静的メンバー」書くほうが汎化されてよい。
  static work2(): string{
    return `Hey, Guys!! This is ${this.firstname}`;
  }


}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバーへのアクセス方法
// インスタンス名ではなくクラス名でアクセスするとできる。
console.log(Me.isProgrammer);
console.log(Me.work());
console.log(Me.work2());


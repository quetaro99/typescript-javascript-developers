export {};

// ジェネリクス
// 同じことをやっているけど違う型がちがう関数
// const echo = (arg: number):number =>{
//   return arg;
// }
// const echo = (arg: string):string =>{
//   return arg;
// }

//　上の関数を抽象的にする ジェネリクス関数
// ジェネリクスの定義<T>をつかって書く。Tであることは必須ではなく慣習。Tは型引数
const echo = <T>(arg: T):T =>{
  return arg;
}

// ジェネリクス関数を呼び出す場合は、
// 関数名<型指定>(引数) とする。
console.log(echo<number>(123));
console.log(echo<string>('あいうえお'));
console.log(echo<boolean>(false));

// クラスに適用する前のクラス
class Mirror{
  constructor(public value: number){}

  echo(): number{
    return this.value
  }
}
console.log(new Mirror(123).echo());

// クラスにジェネリクスを適用するとこうなる
// クラス自体とメンバー変数、メソッドをジェネリクスにする
class Mirror2<T>{
  constructor(public value: T){}

  echo(): T{
    return this.value
  }
}
console.log(new Mirror2<number>(123).echo());
console.log(new Mirror2<string>('Generics Type!!').echo());
console.log(new Mirror2<boolean>(true).echo());



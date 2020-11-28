export {};

// 関数のオーバロードするには

// シグネチャー
function double(value: number):number;
function double(value: string):string;

// 実態の関数(any型で定義する)
// シグネチャーの方の型成約が効く
function double(value: any):any{
  // console.log(typeof(value));
  if(typeof(value) === 'number'){
    return value * 2;
  }else{
    return value + value;
  }
}

// function double(value: string):string{
//     return value+value;
// }

console.log(double(100));
console.log(double('Go '));

// 型制約でbooleanは入らないので、コンパイルエラーとなる。
// console.log(double(true));

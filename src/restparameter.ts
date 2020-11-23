export {};

const reducer = (accumulator:number, currentValue:number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
};

// Rest Parameter
// JavaScriptの機能
// 引数の個数が何個かわからない場合(restパラメータ)
//  Restパラメータは配列で格納されるので配列でアノテートする
const sum: (...values: number[]) => number = (
  ...values:number[])
:number =>{
  return values.reduce(reducer);  
  
};

console.log(sum(1,2,3,4,5));


export {};

// return types
// 関数の戻り値の型を教えてくれる型

function add(a:number,b:number){
  return a+b;
}

console.log(add(1,2));

type ReturnTypefromAdd = ReturnType<typeof add>;

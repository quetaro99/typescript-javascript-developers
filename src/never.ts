export {};

// 例外が発生する関数 returnされない
function error(message: string): never{
  throw new Error(message);
}

try{
  let result = error('エラーテスト');
  console.log(result);
} catch(error) {
  console.log(error);
}

// never型は代入できない
let foo: void = undefined;
// let bar: never = undefined;

// never型 errorは入る
let bar2: never = error('err');


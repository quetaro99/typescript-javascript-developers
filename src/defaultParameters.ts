export {};

// 関数の引数の初期値を指定する（引数が指定されていないorUndefinedがわたされた）
// 初期値は引数＝初期値と指定する
const nextSalary = (currentSalary: number,rate: number =1.1) =>{
  return currentSalary * rate;
}

console.log(nextSalary(1000,1.05));
// 初期値を使う場合
console.log(nextSalary(1000));

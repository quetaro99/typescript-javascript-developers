export {};

// typeScriptのアロー関数はJavascriptとほとんど一緒
// 引数、戻り値にアノテーションをつければOK
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.77,75));


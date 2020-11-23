export {};

// typeScriptの関数はJavascriptとほとんど一緒
// 引数、関数にアノテーションをつければOK
function bmi(height: number,weight: number): number{
  return weight / (height * height);
}

console.log(bmi(1.77,75));


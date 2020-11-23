export {};

// この場合は引数２つが必須
let bmi: (height: number, weight: number) => number = (
    height:number,
    weight:number
  ): number => weight / (height * height);

console.log(bmi(1.77,75));

// bmi(身長、体重、コンソールに出力するかどうか？）　を作ってみる。
// ３番目の引数はあってもなくても良い引数としてみる。
// true = 画面出力あり。false=画面出力なし。指定しない＝falseと同じ結果
// オプショナル（あってもなくてもよい引数）には変数の最後に？をつける
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
  height:number,
  weight:number,
  printable?:boolean
): number => {

  let workbmi:number = weight / (height * height);

  if (printable){
      console.log('bmi:' + workbmi);
    }
  return workbmi;

  };

bmi2(1.77,75,true);







export {};

// 型アサーション

// いままではこうなっている

let name: any = 'Qtaro';
// lengthは文字列数をいれるから数値型となる。
let length:number = name.length;
// numberだから文字列もいれられない
// length = 'aiueo';

// 型アサーションをつかうと いかのようにかける。
let lengthAssert1 = name.length as number;
let lengthAssert2 = ( name as string).length;
// これでもできるけど非推奨 (jsxの書き方とまぎらわしい)
let lengthAssert3 = (<string>name).length;




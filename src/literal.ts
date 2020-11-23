export {};

let dayOftheWeek: string ='Sun';
dayOftheWeek = 'Mon';
// 曜日じゃないものをいれてもstringだからエラーにならない
dayOftheWeek = '31';

// UNION型のように変数にいれてよい候補を列挙する。列挙したもの以外は入れられない。
let dayOftheWeek2: 'Sun'|'Mon'|'Tue'|'Wed'|'Thr'|'Fri'|'Sat' ='Sun';
dayOftheWeek2 ='Mon';
dayOftheWeek2 ='Tue';
// これはコンパイルエラーになる。
// dayOftheWeek2 ='21';

// 数字の場合
let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 12;
// これはコンパイルエラーになる。
// month = 13


// booleanでも一応できる。（つかうことはない）
let check:true = true;
// falseをいれるとコンパイルエラーになる。
// check = false;


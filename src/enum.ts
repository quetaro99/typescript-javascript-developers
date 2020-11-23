export {};

// 月の名称を列挙型で定義してみる
enum Months{
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jul,
  Jun,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

//使うときは、列挙型.列挙要素とする
console.log(Months.May);

// でもこのままだと月−１の数字しかとれない。。
// こうするとできる 先頭の要素に数値を指定すればあとは順番どおりにインクリメントされる
enum Months2{
  Jan =1,
  Feb,
  Mar,
  Apr,
  May,
  Jul,
  Jun,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

// 文字列の場合の列挙型はこうする
enum colors {
  white = '#FFFFFF',
  blue = '#0000FF',
}

console.log(colors.blue);
// 列挙要素にないものだとコンパイルエラーとなる。
// console.log(colors.black);

// あとからつけたせる
enum colors{
  black = '#000000FA'
}
console.log(colors.black);
// 上書きではなく追加されているからエラーにならない。
console.log(colors.blue);




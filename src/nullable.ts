export {};

// null able について
// nullableとはnullを許容するかどうか。

// 以下のageはnumberで定義しているのにnullは許容できない。
// デフォルトのコンパイルオプション（tsconfig.json）だと許容されない
// ただし、コンパイルオプション　tsconfig.json　のstrictNullChecks": false　にするとできる。
// とはいえ、基本的には危険なコードになるので、nullは許容しないほうが良い。

let profile: {name: string, age: number} = {
  name: 'Qtaro',
  // age: null
  age:0
};

// コンパイルオプションを変えずにnullを使う場合
// 基本はこのように書く
// 型アノテーションに共用型としてnullを指定する
let profile2: {name: string, age: number|null} = {
  name: 'Qtaro',
  age: null
};

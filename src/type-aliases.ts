export {};

// エイリアス型 別名の先頭は大文字
type Mojiretsu = string;

// 比べる
let bcd: string ='Qtaro';
let abc: Mojiretsu = 'Qtaro';

// オブジェクトに独自の名前の型をつけられる
type Profile = {
  name: string;
  age: number;
} 

let profile1: Profile = {
  name: 'Qtaro',
  age: 41
}

// 型をtypeofで調べて新しい型定義に代入することができる
type Profile2 = typeof profile1;
let profile2: Profile = {
  name: 'Qtaro',
  age: 41
}

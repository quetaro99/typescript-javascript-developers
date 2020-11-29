export {};

// indexシグネチャ

// これはできない。。型宣言がないからつかえない。
// let profile: {} = {};
// profile.name = 'Qtaro';

// 要素を追加したい場合は?をつければよいが、。。
// nameだけしか追加できない
let profile: {name?: string} = {};
profile.name = 'Qtaro';
// そのためこれはできない。
// profile.age = 41;

// これをかいけつするためにインデックスシグネチャを使う。
let profile2: { [index:string]:string|number} ={};
profile2.name = 'Qtaro';
profile2.age = 41;
profile2.nationality = 'Japan';


// さらにわかり易く書くと interfaceでインデックスシグネチャを書いて実装する。
interface Profile3 {
  [index:string]: string| number | boolean;
}

let profile3:Profile3 = {};
profile3.name = 'Qtaro';
profile3.age = 41;
profile3.nationality = 'Japan';
profile3.IsUnderTwenty = false;

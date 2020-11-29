export {};

// Const アサーション

// これはできる
let name = 'Qtaro';
name = 'Jiro';

// Constアサーションをつかうと
let nickName = 'Qtaro' as const;
// これはダメ　Constが聞いているので再代入はNG
// nickName = 'Jiro';

// オブジェクトだと
let Profile = {
  name: 'Qtaro',
  height: 178
}
// これはできる。再代入OK
Profile.name = 'Jiro';
Profile.height = 190;

// 上記にconstアサーションをつけると
let Profile2 = {
  name: 'Qtaro',
  height: 178
} as const
// これはできない。constアサーションが聞いている。
// Profile2.name = 'Jiro';
// Profile2.height = 190;


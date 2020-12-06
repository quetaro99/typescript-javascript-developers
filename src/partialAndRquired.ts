export {};

// pertioal
// utility types の一つ
type Profile = {
  name: string;
  age: number;
  postalCode: number;
};

// すべての要素をオプション（あてっもなくてもOK）にしたい。
// これはメンテが大変だからダメ
type Profile2 = {
  name?: string;
  age?: number;
};

// ならどうするか？
// partialをつかうと元の型が変更された場合でも自動で追加される
type PartialType = Partial<Profile>;

// 逆にどれも必須にしたいものを複製したい
// 複製元は以下として
type Profile3 = {
  name: string;
  age?: number;
  postalCode: number;
};

// Requiredを使うことですべて必須な要素の型が複製できる。
type RequiredType = Required<Profile3>;


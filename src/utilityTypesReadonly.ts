export {};

// read only

type Profile = {
  name: string;
  age: number;
};

let me:Profile = {
  name: 'Qtaro',
  age:  41
}

me.age++;

console.log(me);

// Read Only をつけたものを複製する。
type PersonalDataType = Readonly<Profile>;

let frend: PersonalDataType = {
  name: 'Jiro',
  age: 42
}
// すべての要素がリードオンリーになっているので再代入（計算）できない。
// frend.age++;

// read only の実態はこれ。
type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

let frend2: YomitoriSenyo<Profile> = {
  name: 'Saburo',
  age: 42
}






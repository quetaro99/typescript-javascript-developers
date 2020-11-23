export {};

// オブジェクト型
let profile1:object = {
  neme: 'Qtaro'
};

profile1 = {
  age: 41
};

console.log(profile1);

let profile2: {
  name: string;
} = {name: 'Qtaro'};
// name型以外は再代入できなくなる。
// profile2 = {
//   age: 41
// };


export {};

type Pitcher1 = {
  Speed: number;
};

type Battter1 = {
  battingAve: number;
};

const daimajin: Pitcher1 ={
  Speed: 154
};

const ochiai: Battter1 ={
  battingAve: 0.367
};

// 両方の属性をもつオブジェクト型を作る場合
// わざわざつくる必要はない。
// type TwowayPlayer ={
//   Speed: number;
//   battingAve: number;
// };

// InterSectionを利用してつくる。
// &でオブジェクトを組み合わせる。もとの型をベースに作れば派生オブジェクト側に自動的に反映される。
type TwowayPlayer = Pitcher1 & Battter1;

const ohtani: TwowayPlayer ={
  Speed: 165,
  battingAve: 0.286
};

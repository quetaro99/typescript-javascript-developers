export {};

type DitaledProfile = {
  name: string;
  height: number;
  weight: number;
};

// pick（取り出す）
// もとの型から必要なものだけを取り出して新しい型を作る
type SimpleProfile = Pick<DitaledProfile, 'name' | 'weight'>;

// omit (除外する)
// もとの型からいらいないものを除外して新しい型をつくる
type SmallProfile = Omit<DitaledProfile, 'height'>;

// omit もどきを自作
type MyOmit = Pick<DitaledProfile,'name'|'weight'>;
type MySmallProfile = MyOmit;

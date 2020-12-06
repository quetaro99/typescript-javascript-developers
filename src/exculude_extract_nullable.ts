export {};

type DebugType = () => void;
type ProductionType = () => void;
// 全部はいっている共用型を定義してみる
type SabunTypes = string | number | DebugType;

// 不要なものを除外した列挙した型の書き方
// 以下はdebuftypeがきえるようにした
type functionType = Exclude<SabunTypes, string| number>;
// 以下はdebuftypeのみ残るようにした
type nonFuctionType = Exclude<SabunTypes, DebugType>;
// 関数全体を除外したい場合はこっちのほうが良い。
type ExculedeFunctionType = Exclude<SabunTypes, Function>;

// 必要なものだけを抽出した列挙した型の書き方
type ExtractFunctionType = Extract<SabunTypes, Function>;


// その２
type NullableTypes = string | number | undefined | null ;
// null,undefinedだけ消したい
type nonNullableTypes = NonNullable<NullableTypes>;

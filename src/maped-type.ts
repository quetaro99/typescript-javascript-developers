export {};

// maped type

type Profile = {
  name: string;
  age: number;
};

// これをパーシャルとリクアイヤで複製するその実態は
type PartialProfile = Partial<Profile>;
// これで同じことができる　けど　そもそもTypeSCRIPTで定義されているPartialの実態は以下。
// in keyof
type Optional <T> = {
  [P in keyof T]?: T[P];
};
type PartialProfile2 = Optional<Profile>;
// なので、これを複製してかいぞうすればこんなこともできるnullを許容する形に改造。
type Optional2 <T> = {
  [P in keyof T]?: T[P]|null;
};
type PartialProfile3 = Optional2<Profile>;


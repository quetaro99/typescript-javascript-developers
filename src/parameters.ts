export {};

const debugProfile = (name:string, age:number) =>{
  console.log(name,age)
};

debugProfile('Qtaro',41);

// Paramtersは引数のみを取り出す型関数
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Jiro',35];

//...で引数を全部とる。
debugProfile(...profile);

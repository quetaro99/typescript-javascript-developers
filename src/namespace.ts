export{};

// 名前空間とは
// クラスが所属する場所を定義する範囲　フォルダ的なもの
// 同じフォルダに２つの同じファイルが存在できないが、別フォルダならそんざいできるのと同じ考え方
namespace Japanese{
  // クラス名の前にexportとつけないと名前空間の外からアクセスできないので注意
  export class Person{
    constructor(public name:string){};
  }  
}

namespace English{
  // 名前空間はネストできる
  export namespace America{
    // クラス名の前にexportとつけないと名前空間の外からアクセスできないので注意
    export class Person{
      constructor(
        public firstName:string,
        public middleName:string,
        public lastName:string
        ){}
    }
  }  
  export namespace Britain{
    // クラス名の前にexportとつけないと名前空間の外からアクセスできないので注意
    export class Person{
      constructor(
        public firstName:string,
        public middleName:string,
        public lastName:string
        ){}
    }  
  }
}

// 名前空間に所属するときのインスタンスの作り方
// 名前空間.クラス名とする

const me = new Japanese.Person('Qtaro');
console.log(me.name);

const micael = new English.America.Person('Micael','Joseph','Jackson');
console.log(micael);
const david = new English.America.Person('David','Pobert','Jones');
console.log(david);

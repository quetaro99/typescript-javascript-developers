export {};

// readonly の使い方
// readonlyは初期化以外の更新はできない制御をつけた変数。
class visaCard{
  readonly owner:  string;

  constructor(owner:  string){
    this.owner = owner;
  }
}

let myVisaCard = new visaCard('Qtaro');

console.log(myVisaCard);
// myVisaCard.owner = 'Jiro';


class visaCard2{
  // readonly 変数にはpublicはつけなくてもよい。ただし読み取り専用のpublic変数となる。
  constructor(readonly owner:  string){}
}

let myVisaCard2 = new visaCard2('Jiro');
// myVisaCard2.owner = 'Saburo';
console.log(myVisaCard2);

class visaCard3{
  // readonly 変数にはpublicをつけるとこうなる
  constructor(public readonly owner:  string){}

}
let myVisaCard3 = new visaCard3('Saburo');
// myVisaCard3.owner = 'Saburo';
console.log(myVisaCard3);
